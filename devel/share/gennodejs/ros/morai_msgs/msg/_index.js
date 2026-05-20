
"use strict";

let CollisionData = require('./CollisionData.js');
let CtrlCmd = require('./CtrlCmd.js');
let DdCtrlCmd = require('./DdCtrlCmd.js');
let DillyCmd = require('./DillyCmd.js');
let DillyCmdResponse = require('./DillyCmdResponse.js');
let EgoDdVehicleStatus = require('./EgoDdVehicleStatus.js');
let EgoVehicleStatus = require('./EgoVehicleStatus.js');
let EgoVehicleStatusExtended = require('./EgoVehicleStatusExtended.js');
let ERP42Info = require('./ERP42Info.js');
let EventInfo = require('./EventInfo.js');
let FaultInjection_Controller = require('./FaultInjection_Controller.js');
let FaultInjection_Response = require('./FaultInjection_Response.js');
let FaultInjection_Sensor = require('./FaultInjection_Sensor.js');
let FaultInjection_Tire = require('./FaultInjection_Tire.js');
let FaultStatusInfo = require('./FaultStatusInfo.js');
let FaultStatusInfo_Overall = require('./FaultStatusInfo_Overall.js');
let FaultStatusInfo_Sensor = require('./FaultStatusInfo_Sensor.js');
let FaultStatusInfo_Vehicle = require('./FaultStatusInfo_Vehicle.js');
let GetTrafficLightStatus = require('./GetTrafficLightStatus.js');
let GhostMessage = require('./GhostMessage.js');
let GPSMessage = require('./GPSMessage.js');
let IntersectionControl = require('./IntersectionControl.js');
let IntersectionStatus = require('./IntersectionStatus.js');
let IntscnTL = require('./IntscnTL.js');
let Lamps = require('./Lamps.js');
let MapSpec = require('./MapSpec.js');
let MapSpecIndex = require('./MapSpecIndex.js');
let MoraiSimProcHandle = require('./MoraiSimProcHandle.js');
let MoraiSimProcStatus = require('./MoraiSimProcStatus.js');
let MoraiSrvResponse = require('./MoraiSrvResponse.js');
let MoraiTLIndex = require('./MoraiTLIndex.js');
let MoraiTLInfo = require('./MoraiTLInfo.js');
let MultiEgoSetting = require('./MultiEgoSetting.js');
let MultiPlayEventRequest = require('./MultiPlayEventRequest.js');
let MultiPlayEventResponse = require('./MultiPlayEventResponse.js');
let NpcGhostCmd = require('./NpcGhostCmd.js');
let NpcGhostInfo = require('./NpcGhostInfo.js');
let ObjectStatus = require('./ObjectStatus.js');
let ObjectStatusExtended = require('./ObjectStatusExtended.js');
let ObjectStatusList = require('./ObjectStatusList.js');
let ObjectStatusListExtended = require('./ObjectStatusListExtended.js');
let PRCtrlCmd = require('./PRCtrlCmd.js');
let PREvent = require('./PREvent.js');
let PRStatus = require('./PRStatus.js');
let RadarDetection = require('./RadarDetection.js');
let RadarDetections = require('./RadarDetections.js');
let ReplayInfo = require('./ReplayInfo.js');
let SaveSensorData = require('./SaveSensorData.js');
let ScenarioLoad = require('./ScenarioLoad.js');
let SensorPosControl = require('./SensorPosControl.js');
let SetTrafficLight = require('./SetTrafficLight.js');
let SkateboardCtrlCmd = require('./SkateboardCtrlCmd.js');
let SkateboardStatus = require('./SkateboardStatus.js');
let SkidSteer6wUGVCtrlCmd = require('./SkidSteer6wUGVCtrlCmd.js');
let SkidSteer6wUGVStatus = require('./SkidSteer6wUGVStatus.js');
let SVADC = require('./SVADC.js');
let SyncModeAddObject = require('./SyncModeAddObject.js');
let SyncModeCmd = require('./SyncModeCmd.js');
let SyncModeCmdResponse = require('./SyncModeCmdResponse.js');
let SyncModeCtrlCmd = require('./SyncModeCtrlCmd.js');
let SyncModeInfo = require('./SyncModeInfo.js');
let SyncModeRemoveObject = require('./SyncModeRemoveObject.js');
let SyncModeResultResponse = require('./SyncModeResultResponse.js');
let SyncModeScenarioLoad = require('./SyncModeScenarioLoad.js');
let SyncModeSetGear = require('./SyncModeSetGear.js');
let TrafficLight = require('./TrafficLight.js');
let VehicleCollision = require('./VehicleCollision.js');
let VehicleCollisionData = require('./VehicleCollisionData.js');
let VehicleSpec = require('./VehicleSpec.js');
let VehicleSpecIndex = require('./VehicleSpecIndex.js');
let WaitForTick = require('./WaitForTick.js');
let WaitForTickResponse = require('./WaitForTickResponse.js');
let WoowaDillyStatus = require('./WoowaDillyStatus.js');

module.exports = {
  CollisionData: CollisionData,
  CtrlCmd: CtrlCmd,
  DdCtrlCmd: DdCtrlCmd,
  DillyCmd: DillyCmd,
  DillyCmdResponse: DillyCmdResponse,
  EgoDdVehicleStatus: EgoDdVehicleStatus,
  EgoVehicleStatus: EgoVehicleStatus,
  EgoVehicleStatusExtended: EgoVehicleStatusExtended,
  ERP42Info: ERP42Info,
  EventInfo: EventInfo,
  FaultInjection_Controller: FaultInjection_Controller,
  FaultInjection_Response: FaultInjection_Response,
  FaultInjection_Sensor: FaultInjection_Sensor,
  FaultInjection_Tire: FaultInjection_Tire,
  FaultStatusInfo: FaultStatusInfo,
  FaultStatusInfo_Overall: FaultStatusInfo_Overall,
  FaultStatusInfo_Sensor: FaultStatusInfo_Sensor,
  FaultStatusInfo_Vehicle: FaultStatusInfo_Vehicle,
  GetTrafficLightStatus: GetTrafficLightStatus,
  GhostMessage: GhostMessage,
  GPSMessage: GPSMessage,
  IntersectionControl: IntersectionControl,
  IntersectionStatus: IntersectionStatus,
  IntscnTL: IntscnTL,
  Lamps: Lamps,
  MapSpec: MapSpec,
  MapSpecIndex: MapSpecIndex,
  MoraiSimProcHandle: MoraiSimProcHandle,
  MoraiSimProcStatus: MoraiSimProcStatus,
  MoraiSrvResponse: MoraiSrvResponse,
  MoraiTLIndex: MoraiTLIndex,
  MoraiTLInfo: MoraiTLInfo,
  MultiEgoSetting: MultiEgoSetting,
  MultiPlayEventRequest: MultiPlayEventRequest,
  MultiPlayEventResponse: MultiPlayEventResponse,
  NpcGhostCmd: NpcGhostCmd,
  NpcGhostInfo: NpcGhostInfo,
  ObjectStatus: ObjectStatus,
  ObjectStatusExtended: ObjectStatusExtended,
  ObjectStatusList: ObjectStatusList,
  ObjectStatusListExtended: ObjectStatusListExtended,
  PRCtrlCmd: PRCtrlCmd,
  PREvent: PREvent,
  PRStatus: PRStatus,
  RadarDetection: RadarDetection,
  RadarDetections: RadarDetections,
  ReplayInfo: ReplayInfo,
  SaveSensorData: SaveSensorData,
  ScenarioLoad: ScenarioLoad,
  SensorPosControl: SensorPosControl,
  SetTrafficLight: SetTrafficLight,
  SkateboardCtrlCmd: SkateboardCtrlCmd,
  SkateboardStatus: SkateboardStatus,
  SkidSteer6wUGVCtrlCmd: SkidSteer6wUGVCtrlCmd,
  SkidSteer6wUGVStatus: SkidSteer6wUGVStatus,
  SVADC: SVADC,
  SyncModeAddObject: SyncModeAddObject,
  SyncModeCmd: SyncModeCmd,
  SyncModeCmdResponse: SyncModeCmdResponse,
  SyncModeCtrlCmd: SyncModeCtrlCmd,
  SyncModeInfo: SyncModeInfo,
  SyncModeRemoveObject: SyncModeRemoveObject,
  SyncModeResultResponse: SyncModeResultResponse,
  SyncModeScenarioLoad: SyncModeScenarioLoad,
  SyncModeSetGear: SyncModeSetGear,
  TrafficLight: TrafficLight,
  VehicleCollision: VehicleCollision,
  VehicleCollisionData: VehicleCollisionData,
  VehicleSpec: VehicleSpec,
  VehicleSpecIndex: VehicleSpecIndex,
  WaitForTick: WaitForTick,
  WaitForTickResponse: WaitForTickResponse,
  WoowaDillyStatus: WoowaDillyStatus,
};
