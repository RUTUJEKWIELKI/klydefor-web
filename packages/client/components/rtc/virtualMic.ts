export const klydeSinkName = "klyde-virtual-source";

export async function getVirtmic() {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const audioDevice = devices.find(
      ({ label }) => label.split(":").pop() === klydeSinkName,
    );
    return audioDevice?.deviceId;
  } catch {
    return null;
  }
}
