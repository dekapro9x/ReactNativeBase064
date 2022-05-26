import { blueA400, blueGrey700, blueGrey900, redA700 } from '@css/Color';
import { AppHeaderSub } from '@element/AppHeaderSub';
import Voice from '@react-native-voice/voice';
import React, { useEffect, useState } from 'react';
import {
  Image, SafeAreaView, ScrollView, StyleSheet,
  Text, TouchableHighlight, View
} from 'react-native';

const RecordSoundToText = () => {
  const [pitch, setPitch] = useState('');
  const [error, setError] = useState('');
  const [end, setEnd] = useState('');
  const [started, setStarted] = useState('');
  const [results, setResults] = useState([]);
  const [partialResults, setPartialResults] = useState([]);

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = (e) => {
    setStarted('√');
  };

  const onSpeechEnd = (e) => {
    setEnd('√');
  };

  const onSpeechError = (e) => {
    setError(JSON.stringify(e.error));
  };

  const onSpeechResults = (event) => {
    console.log("Đã nghe thấy:", event);
    console.log("Event", event);
    setResults(event.value);
  };

  const onSpeechPartialResults = (e) => {
    setPartialResults(e.value);
  };

  const onSpeechVolumeChanged = (element) => {
    setPitch(element.value);
  };

  const startRecognizing = async () => {
    try {
      await Voice.start('vi-VN');
      setPitch('');
      setError('');
      setStarted('');
      setResults([]);
      setPartialResults([]);
      setEnd('');
    } catch (e) {
      console.error(e);
    }
  };

  const stopRecognizing = async () => {
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };

  const cancelRecognizing = async () => {
    try {
      await Voice.cancel();
    } catch (e) {
      console.error(e);
    }
  };

  const destroyRecognizer = async () => {
    try {
      await Voice.destroy();
      setPitch('');
      setError('');
      setStarted('');
      setResults([]);
      setPartialResults([]);
      setEnd('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <AppHeaderSub subName={"Speech To Text"} />
        {/* Actions Record */}
        <View style={styles.headerContainer}>
          <Text style={styles.textWithSpaceStyle}>
            {`Started: ${started}`}
          </Text>
          <Text style={styles.textWithSpaceStyle}>
            {`End: ${end}`}
          </Text>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.textWithSpaceStyle}>
            {`Pitch: \n ${pitch}`}
          </Text>
          <Text style={styles.textWithSpaceStyle}>
            {`Error: \n ${error}`}
          </Text>
        </View>
        <TouchableHighlight
          style={{ height: 80, width: 80, borderRadius: 40, backgroundColor: "red", alignItems: "center", justifyContent: "center" }}
          onPress={startRecognizing}>
          <Image
            style={styles.imageButton}
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/microphone.png',
            }}
          />
        </TouchableHighlight>
        <ScrollView>
          {partialResults.map((result, index) => {
            return (
              <Text
                key={`partial-result-${index}`}
                style={[styles.textStyle, { fontWeight: "bold", color: "black" }]}>
                {result}
              </Text>
            );
          })}
        </ScrollView>
        <Text style={[styles.textStyle, { color: blueA400, fontWeight: "bold" }]}>
          Kết quả:
        </Text>
        <ScrollView style={{ marginBottom: 42 }}>
          {results.map((result, index) => {
            return (
              <Text
                key={`result-${index}`}
                style={[styles.textStyle, { color: blueGrey700 }]}>
                KQ{index + 1}:
                <Text
                  key={`result-${index}`}
                  style={[styles.textStyle, { color: redA700 }]}>
                  {" "}   {result}
                </Text>
              </Text>
            );
          })}
        </ScrollView>
        <View style={styles.horizontalView}>
          <TouchableHighlight
            onPress={stopRecognizing}
            style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>
              Stop
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={cancelRecognizing}
            style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>
              Cancel
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={destroyRecognizer}
            style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>
              Destroy
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RecordSoundToText;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#8ad24e',
    marginRight: 2,
    marginLeft: 2,
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  horizontalView: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
  },
  textStyle: {
    textAlign: 'center',
    padding: 12,
  },
  imageButton: {
    width: 50,
    height: 50,
  },
  textWithSpaceStyle: {
    flex: 1,
    textAlign: 'center',
    color: blueGrey900,
    fontWeight: 'bold'
  },
});
