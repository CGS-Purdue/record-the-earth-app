push [--sync] LOCAL... REMOTE
    copy local files/directories to device
    --sync: only push files that are newer on the host than the device
pull [-a] REMOTE... LOCAL
    copy files/dirs from device
    -a: preserve file timestamp and mode
sync [all|data|odm|oem|product|system|system_ext|vendor]
   sync a local build from $ANDROID_PRODUCT_OUT to the device (default all)
   -l: list but don't copy
[app installation]
install [-lrtsdg] [--instant] PACKAGE
    push a single package to the device and install it
install-multiple [-lrtsdpg] [--instant] PACKAGE...
    push multiple APKs to the device for a single package and install them
install-multi-package [-lrtsdpg] [--instant] PACKAGE...
    push one or more packages to the device and install them atomically
    -r: replace existing application
    -t: allow test packages
    -d: allow version code downgrade (debuggable packages only)
    -p: partial application install (install-multiple only)
    -g: grant all runtime permissions
    --instant: cause the app to be installed as an ephemeral install app
    --no-streaming: always push APK to device and invoke Package Manager as separate steps
    --streaming: force streaming APK directly into Package Manager
    --fastdeploy: use fast deploy
    --no-fastdeploy: prevent use of fast deploy
    --force-agent: force update of deployment agent when using fast deploy
    --date-check-agent: update deployment agent when local version is newer and using fast deploy
    --version-check-agent: update deployment agent when local version has different version code and using fast deploy
    --local-agent: locate agent files from local source build (instead of SDK location)
uninstall [-k] PACKAGE
    remove this app package from the device
    '-k': keep the data and cache directories
[scripting]
wait-for[-TRANSPORT]-STATE
    wait for device to be in the given state
    STATE: device, recovery, rescue, sideload, bootloader, or disconnect
    TRANSPORT: usb, local, or any [default=any]
get-state                print offline | bootloader | device
get-serialno             print <serial-number>
get-devpath              print <device-path>
remount [-R]
     remount partitions read-write. if a reboot is required, -R will
     will automatically reboot the device.
reboot [bootloader|recovery|sideload|sideload-auto-reboot]
    reboot the device; defaults to booting system image but
    supports bootloader and recovery too. sideload reboots
    into recovery and automatically starts sideload mode,
    sideload-auto-reboot is the same but reboots after sideloading.
sideload OTAPACKAGE      sideload the given full OTA package
root                     restart adbd with root permissions
unroot                   restart adbd without root permissions
usb                      restart adbd listening on USB
tcpip PORT               restart adbd listening on TCP on PORT
