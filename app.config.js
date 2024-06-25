module.exports = {
  expo: {
    owner: "gudditi",
    icon: process.env.APP_ICON || 'https://www.blackbox.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBlackbox-Logo-4x.85cc4976.png&w=384&q=75',
    name: process.env.APP_NAME || 'gudditi-test',
    extra: {
      eas: {
        projectId: "1178e2a7-3f80-4832-805c-ef0c17c0baec"
      }
    },
    updates: {
      url: "https://u.expo.dev/1178e2a7-3f80-4832-805c-ef0c17c0baec"
    },
    runtimeVersion: {
      policy: "appVersion"
    }
  }
};
