# react-native-media-controls
Chức năng: Tạo giao diện điều khiển media với react-native-video
Link: https://github.com/charliesbot/react-native-media-controls
https://www.asapdevelopers.com/react-native-video-media-controls-example/
# Cài đặt: 
Bước 1:
yarn add react-native-media-controls
// install react-native-slider, as this is a dependency of this library
yarn add react-native-slider
Bước 2:
// Require the module
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';

const App = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [paused, setPaused] = useState(false);
  const [playerState, setPlayerState] = useState(PLAYER_STATES.PLAYING);

  // ... ... ...
  // ... ... ...

  return (
    <View style={styles.container}>
      <Video
        {...videoProps}
      />
      <MediaControls
        isFullScreen={isFullScreen}
        duration={duration}
        isLoading={isLoading}
        mainColor="orange"
        onFullScreen={noop}
        onPaused={onPaused}
        onReplay={onReplay}
        onSeek={onSeek}
        onSeeking={onSeeking}
        playerState={playerState}
        progress={currentTime}
      >
        <MediaControls.Toolbar>
          <View style={styles.toolbar}>
            <Text>I'm a custom toolbar </Text>
          </View>
        </MediaControls.Toolbar>
      </MediaControls>
    </View>
  );
};