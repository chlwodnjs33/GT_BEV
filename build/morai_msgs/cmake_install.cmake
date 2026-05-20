# Install script for directory: C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs

# Set the install prefix
if(NOT DEFINED CMAKE_INSTALL_PREFIX)
  set(CMAKE_INSTALL_PREFIX "C:/Users/autonav009/Desktop/GT_BEV/install")
endif()
string(REGEX REPLACE "/$" "" CMAKE_INSTALL_PREFIX "${CMAKE_INSTALL_PREFIX}")

# Set the install configuration name.
if(NOT DEFINED CMAKE_INSTALL_CONFIG_NAME)
  if(BUILD_TYPE)
    string(REGEX REPLACE "^[^A-Za-z0-9_]+" ""
           CMAKE_INSTALL_CONFIG_NAME "${BUILD_TYPE}")
  else()
    set(CMAKE_INSTALL_CONFIG_NAME "RelWithDebInfo")
  endif()
  message(STATUS "Install configuration: \"${CMAKE_INSTALL_CONFIG_NAME}\"")
endif()

# Set the component getting installed.
if(NOT CMAKE_INSTALL_COMPONENT)
  if(COMPONENT)
    message(STATUS "Install component: \"${COMPONENT}\"")
    set(CMAKE_INSTALL_COMPONENT "${COMPONENT}")
  else()
    set(CMAKE_INSTALL_COMPONENT)
  endif()
endif()

# Is this installation the result of a crosscompile?
if(NOT DEFINED CMAKE_CROSSCOMPILING)
  set(CMAKE_CROSSCOMPILING "FALSE")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/morai_msgs/msg" TYPE FILE FILES
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/CtrlCmd.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/EgoVehicleStatus.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/EgoVehicleStatusExtended.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/GPSMessage.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/GhostMessage.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/ObjectStatusList.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/ObjectStatus.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/ObjectStatusExtended.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/ObjectStatusListExtended.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/TrafficLight.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/ERP42Info.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/GetTrafficLightStatus.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/SetTrafficLight.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/IntersectionControl.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/IntersectionStatus.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/CollisionData.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/MultiEgoSetting.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/IntscnTL.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/SensorPosControl.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/MoraiSimProcHandle.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/MoraiSimProcStatus.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/MoraiSrvResponse.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/ScenarioLoad.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/MoraiTLIndex.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/MoraiTLInfo.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/SaveSensorData.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/ReplayInfo.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/EventInfo.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/Lamps.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/VehicleSpec.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/VehicleSpecIndex.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/NpcGhostCmd.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/NpcGhostInfo.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/VehicleCollisionData.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/VehicleCollision.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/SyncModeAddObject.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/SyncModeInfo.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/WaitForTickResponse.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/SyncModeCmd.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/SyncModeRemoveObject.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/SyncModeCmdResponse.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/WaitForTick.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/MapSpec.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/MapSpecIndex.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/SyncModeCtrlCmd.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/SyncModeSetGear.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/SyncModeResultResponse.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/SyncModeScenarioLoad.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/RadarDetection.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/RadarDetections.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/PRStatus.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/PRCtrlCmd.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/PREvent.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/SkateboardCtrlCmd.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/SkateboardStatus.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/SkidSteer6wUGVCtrlCmd.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/SkidSteer6wUGVStatus.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/MultiPlayEventResponse.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/MultiPlayEventRequest.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/DillyCmdResponse.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/DillyCmd.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/WoowaDillyStatus.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/SVADC.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/FaultInjection_Controller.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/FaultInjection_Response.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/FaultInjection_Sensor.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/FaultInjection_Tire.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/FaultStatusInfo_Overall.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/FaultStatusInfo_Sensor.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/FaultStatusInfo_Vehicle.msg"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/msg/FaultStatusInfo.msg"
    )
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/morai_msgs/srv" TYPE FILE FILES
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/srv/MoraiScenarioLoadSrv.srv"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/srv/MoraiSimProcSrv.srv"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/srv/MoraiTLInfoSrv.srv"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/srv/MoraiEventCmdSrv.srv"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/srv/MoraiVehicleSpecSrv.srv"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/srv/MoraiSyncModeCmdSrv.srv"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/srv/MoraiWaitForTickSrv.srv"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/srv/MoraiMapSpecSrv.srv"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/srv/MoraiSyncModeCtrlCmdSrv.srv"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/srv/MoraiSyncModeSetGearSrv.srv"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/srv/MoraiSyncModeSLSrv.srv"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/srv/PREventSrv.srv"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/srv/MoraiSyncModeAddObjectSrv.srv"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/srv/MoraiSyncModeRemoveObjectSrv.srv"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/srv/MultiPlayEventSrv.srv"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/srv/WoowaDillyEventCmdSrv.srv"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/srv/FaultInjectionCtrlSrv.srv"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/srv/FaultInjectionSensorSrv.srv"
    "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/srv/FaultInjectionTireSrv.srv"
    )
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/morai_msgs/cmake" TYPE FILE FILES "C:/Users/autonav009/Desktop/GT_BEV/build/morai_msgs/catkin_generated/installspace/morai_msgs-msg-paths.cmake")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/include" TYPE DIRECTORY FILES "C:/Users/autonav009/Desktop/GT_BEV/devel/include/morai_msgs")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/roseus/ros" TYPE DIRECTORY FILES "C:/Users/autonav009/Desktop/GT_BEV/devel/share/roseus/ros/morai_msgs")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/common-lisp/ros" TYPE DIRECTORY FILES "C:/Users/autonav009/Desktop/GT_BEV/devel/share/common-lisp/ros/morai_msgs")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/gennodejs/ros" TYPE DIRECTORY FILES "C:/Users/autonav009/Desktop/GT_BEV/devel/share/gennodejs/ros/morai_msgs")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  execute_process(COMMAND "C:/Users/autonav009/anaconda3/envs/ros_env/python.exe" -m compileall "C:/Users/autonav009/Desktop/GT_BEV/devel/lib/site-packages/morai_msgs")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib/site-packages" TYPE DIRECTORY FILES "C:/Users/autonav009/Desktop/GT_BEV/devel/lib/site-packages/morai_msgs")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib/pkgconfig" TYPE FILE FILES "C:/Users/autonav009/Desktop/GT_BEV/build/morai_msgs/catkin_generated/installspace/morai_msgs.pc")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/morai_msgs/cmake" TYPE FILE FILES "C:/Users/autonav009/Desktop/GT_BEV/build/morai_msgs/catkin_generated/installspace/morai_msgs-msg-extras.cmake")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/morai_msgs/cmake" TYPE FILE FILES
    "C:/Users/autonav009/Desktop/GT_BEV/build/morai_msgs/catkin_generated/installspace/morai_msgsConfig.cmake"
    "C:/Users/autonav009/Desktop/GT_BEV/build/morai_msgs/catkin_generated/installspace/morai_msgsConfig-version.cmake"
    )
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/morai_msgs" TYPE FILE FILES "C:/Users/autonav009/Desktop/GT_BEV/src/morai_msgs/package.xml")
endif()

string(REPLACE ";" "\n" CMAKE_INSTALL_MANIFEST_CONTENT
       "${CMAKE_INSTALL_MANIFEST_FILES}")
if(CMAKE_INSTALL_LOCAL_ONLY)
  file(WRITE "C:/Users/autonav009/Desktop/GT_BEV/build/morai_msgs/install_local_manifest.txt"
     "${CMAKE_INSTALL_MANIFEST_CONTENT}")
endif()
