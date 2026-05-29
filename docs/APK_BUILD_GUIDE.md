# APK Build Instructions

## 📱 BGMI Mod APK Build Guide

### Prerequisites
- Android SDK (API 34)
- Android Build Tools 34.0.0
- Java JDK 8 or higher
- Gradle 8.0+

### Installation Steps

1. **Setup Android SDK**
   ```bash
   export ANDROID_HOME=/path/to/android-sdk
   export PATH=$ANDROID_HOME/tools:$PATH
   ```

2. **Generate Keystore (First time only)**
   ```bash
   keytool -genkey -v -keystore keystore.jks \
     -keyalg RSA -keysize 2048 -validity 10000 \
     -alias bgmi_key
   ```

3. **Build APK**
   ```bash
   chmod +x scripts/build-apk.sh
   ./scripts/build-apk.sh
   ```

   Or manually:
   ```bash
   ./gradlew assembleRelease
   ```

4. **Output Location**
   ```
   android/app/build/outputs/apk/release/app-release.apk
   ```

### Environment Variables
Set these for CI/CD:
```bash
export KEYSTORE_PASSWORD=your_password
export KEY_ALIAS=bgmi_key
export KEY_PASSWORD=your_password
```

### APK Size Optimization
- ProGuard enabled for code obfuscation
- Resource shrinking enabled
- Unused dependencies removed

### Installation on Device
```bash
adb install android/app/build/outputs/apk/release/app-release.apk
```

### Debugging (Optional)
```bash
./gradlew assembleDebug
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

### Troubleshooting

**Issue: Build fails with Gradle error**
- Run: `./gradlew clean`
- Update: `./gradlew wrapper --gradle-version=8.0`

**Issue: Keystore not found**
- Generate new keystore in project root
- Update path in `build.gradle`

**Issue: Out of memory**
- Increase Gradle heap: `export GRADLE_OPTS="-Xmx2048m"`

### File Structure
```
📁 android/
├── app/
│   ├── build.gradle
│   ├── proguard-rules.pro
│   └── src/
│       └── main/
│           └── AndroidManifest.xml
├── gradle/
│   └── wrapper/
└── build.gradle (root)
```

### Next Steps
1. ✅ Build APK
2. 🧪 Test on emulator or device
3. 📤 Upload to Play Store or distribute manually
4. 📊 Monitor crashes with Firebase Crashlytics

---
Built with 🎮 for BGMI players
