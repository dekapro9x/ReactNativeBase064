package com.bittee.modules;

import java.util.HashMap;
import java.util.Map;

import android.content.Context;
import android.media.AudioManager;
import android.media.SoundPool;
import android.os.Handler;


public class Util {
    public static SoundPool sp;
    public static Map<Integer, Integer> soundMap;
    public static Context context;
    public static int numSound = 0;
    public static int curVolumn = 15;

    //init sound pool
    public static void initSoundPool(Context context) {
        if (sp == null) {
            Util.context = context;
            sp = new SoundPool(1, AudioManager.STREAM_MUSIC, 1);
            soundMap = new HashMap<Integer, Integer>();

            AudioManager am = (AudioManager) Util.context.getSystemService(Util.context.AUDIO_SERVICE);
            curVolumn = am.getStreamVolume(AudioManager.STREAM_MUSIC);
        }
    }

    static class NewRunner implements Runnable {
        AudioManager am;
        int cur;
        int numSound;

        NewRunner(AudioManager am, int cur, int numSound) {
            this.am = am;
            this.cur = cur;
            this.numSound = numSound;
        }

        @Override
        public void run() {
            if (Util.numSound == numSound)
                am.setStreamVolume(AudioManager.STREAM_MUSIC, cur, 0);
            if (Util.numSound > 10000) {
                Util.numSound = 0;
            }
        }
    }

    public static void play(int sound, int number) {
        Util.numSound += 1;
        AudioManager am = (AudioManager) Util.context.getSystemService(Util.context.AUDIO_SERVICE);
        int audioMaxVolume = am.getStreamMaxVolume(AudioManager.STREAM_MUSIC);
        if (Util.numSound % 100 == 0) {
            Util.curVolumn = am.getStreamVolume(AudioManager.STREAM_MUSIC);
        }
        am.setStreamVolume(AudioManager.STREAM_MUSIC, audioMaxVolume, 0);
        sp.play(soundMap.get(sound), 0.99f, 0.99f, 1, 0, 0.99f);
        Handler handler = new Handler();
        handler.postDelayed(new NewRunner(am, Util.curVolumn, Util.numSound), 3000);
    }
}
