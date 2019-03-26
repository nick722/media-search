import amplitude from "amplitude-js/amplitude";

export const initAmplitude = () => {
  const apiKey = "85f8de997f854a5b627870b08517a4c0";
  amplitude.getInstance().init(apiKey);
};

export const setAmplitudeUserDevice = installationToken => {
  amplitude.getInstance().setDeviceId(installationToken);
};

export const setAmplitudeUserId = userId => {
  amplitude.getInstance().setUserId(userId);
};

export const setAmplitudeUserProperties = properties => {
  amplitude.getInstance().setUserProperties(properties);
};

export const sendAmplitudeData = (eventType, eventProperties) => {
  amplitude.getInstance().logEvent(eventType, eventProperties);
};
