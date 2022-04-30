export enum DeviceCommand {
    getPropertiesMetadata = "device.get_properties_metadata",
    getProperties = "device.get_properties",
    setProperty = "device.set_property",
    hasProperty = "device.has_property",
    startLivestream = "device.start_livestream",
    stopLivestream = "device.stop_livestream",
    isLiveStreaming = "device.is_livestreaming",
    triggerAlarm = "device.trigger_alarm",
    resetAlarm = "device.reset_alarm",
    panAndTilt = "device.pan_and_tilt",
    quickResponse = "device.quick_response",
    startDownload = "device.start_download",
    cancelDownload = "device.cancel_download",
    getVoices = "device.get_voices",
    getCommands = "device.get_commands",
    hasCommand = "device.has_command",
    startRTSPLivestream = "device.start_rtsp_livestream",
    stopRTSPLivestream = "device.stop_rtsp_livestream",
    isRTSPLiveStreaming = "device.is_rtsp_livestreaming",
    calibrateLock = "device.calibrate_lock",
    calibrate = "device.calibrate",
    setDefaultAngle = "device.set_default_angle",
    setPrivacyAngle = "device.set_privacy_angle",

    //Deprecated - Commands below will be removed in a feature version!
    setStatusLed = "device.set_status_led",
    setAutoNightVision = "device.set_auto_night_vision",
    setMotionDetection = "device.set_motion_detection",
    setSoundDetection = "device.set_sound_detection",
    setPetDetection = "device.set_pet_detection",
    setRTSPStream = "device.set_rtsp_stream",
    setAntiTheftDetection = "device.set_anti_theft_detection",
    setWatermark = "device.set_watermark",
    enableDevice = "device.enable_device",
    lockDevice = "device.lock_device",
}
