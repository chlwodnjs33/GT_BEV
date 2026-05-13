
"use strict";

let ReplayInfo = require('./ReplayInfo.js');
let EgoDdVehicleStatus = require('./EgoDdVehicleStatus.js');
let MoraiSrvResponse = require('./MoraiSrvResponse.js');
let VehicleCollisionData = require('./VehicleCollisionData.js');
let SensorPosControl = require('./SensorPosControl.js');
let PRCtrlCmd = require('./PRCtrlCmd.js');
let SVADC = require('./SVADC.js');
let SyncModeScenarioLoad = require('./SyncModeScenarioLoad.js');
let WaitForTickResponse = require('./WaitForTickResponse.js');
let SkidSteer6wUGVCtrlCmd = require('./SkidSteer6wUGVCtrlCmd.js');
let MoraiSimProcHandle = require('./MoraiSimProcHandle.js');
let SetTrafficLight = require('./SetTrafficLight.js');
let EgoVehicleStatus = require('./EgoVehicleStatus.js');
let ObjectStatus = require('./ObjectStatus.js');
let WaitForTick = require('./WaitForTick.js');
let RadarDetections = require('./RadarDetections.js');
let CollisionData = require('./CollisionData.js');
let MapSpec = require('./MapSpec.js');
let GPSMessage = require('./GPSMessage.js');
let SkateboardCtrlCmd = require('./SkateboardCtrlCmd.js');
let FaultInjection_Response = require('./FaultInjection_Response.js');
let DillyCmd = require('./DillyCmd.js');
let SyncModeSetGear = require('./SyncModeSetGear.js');
let TrafficLight = require('./TrafficLight.js');
let SyncModeInfo = require('./SyncModeInfo.js');
let VehicleSpec = require('./VehicleSpec.js');
let MoraiTLInfo = require('./MoraiTLInfo.js');
let SyncModeCmdResponse = require('./SyncModeCmdResponse.js');
let FaultStatusInfo_Vehicle = require('./FaultStatusInfo_Vehicle.js');
let SkateboardStatus = require('./SkateboardStatus.js');
let FaultStatusInfo_Sensor = require('./FaultStatusInfo_Sensor.js');
let DdCtrlCmd = require('./DdCtrlCmd.js');
let IntscnTL = require('./IntscnTL.js');
let SaveSensorData = require('./SaveSensorData.js');
let RadarDetection = require('./RadarDetection.js');
let GhostMessage = require('./GhostMessage.js');
let FaultInjection_Controller = require('./FaultInjection_Controller.js');
let IntersectionControl = require('./IntersectionControl.js');
let GetTrafficLightStatus = require('./GetTrafficLightStatus.js');
let CtrlCmd = require('./CtrlCmd.js');
let SyncModeResultResponse = require('./SyncModeResultResponse.js');
let MultiPlayEventResponse = require('./MultiPlayEventResponse.js');
let SyncModeAddObject = require('./SyncModeAddObject.js');
let ObjectStatusExtended = require('./ObjectStatusExtended.js');
let VehicleSpecIndex = require('./VehicleSpecIndex.js');
let EventInfo = require('./EventInfo.js');
let NpcGhostCmd = require('./NpcGhostCmd.js');
let FaultStatusInfo_Overall = require('./FaultStatusInfo_Overall.js');
let ERP42Info = require('./ERP42Info.js');
let PRStatus = require('./PRStatus.js');
let PREvent = require('./PREvent.js');
let VehicleCollision = require('./VehicleCollision.js');
let IntersectionStatus = require('./IntersectionStatus.js');
let MultiPlayEventRequest = require('./MultiPlayEventRequest.js');
let MultiEgoSetting = require('./MultiEgoSetting.js');
let FaultInjection_Tire = require('./FaultInjection_Tire.js');
let DillyCmdResponse = require('./DillyCmdResponse.js');
let MapSpecIndex = require('./MapSpecIndex.js');
let SyncModeCmd = require('./SyncModeCmd.js');
let ObjectStatusList = require('./ObjectStatusList.js');
let SyncModeCtrlCmd = require('./SyncModeCtrlCmd.js');
let FaultInjection_Sensor = require('./FaultInjection_Sensor.js');
let EgoVehicleStatusExtended = require('./EgoVehicleStatusExtended.js');
let MoraiSimProcStatus = require('./MoraiSimProcStatus.js');
let WoowaDillyStatus = require('./WoowaDillyStatus.js');
let ScenarioLoad = require('./ScenarioLoad.js');
let FaultStatusInfo = require('./FaultStatusInfo.js');
let NpcGhostInfo = require('./NpcGhostInfo.js');
let MoraiTLIndex = require('./MoraiTLIndex.js');
let SyncModeRemoveObject = require('./SyncModeRemoveObject.js');
let SkidSteer6wUGVStatus = require('./SkidSteer6wUGVStatus.js');
let ObjectStatusListExtended = require('./ObjectStatusListExtended.js');
let Lamps = require('./Lamps.js');

module.exports = {
  ReplayInfo: ReplayInfo,
  EgoDdVehicleStatus: EgoDdVehicleStatus,
  MoraiSrvResponse: MoraiSrvResponse,
  VehicleCollisionData: VehicleCollisionData,
  SensorPosControl: SensorPosControl,
  PRCtrlCmd: PRCtrlCmd,
  SVADC: SVADC,
  SyncModeScenarioLoad: SyncModeScenarioLoad,
  WaitForTickResponse: WaitForTickResponse,
  SkidSteer6wUGVCtrlCmd: SkidSteer6wUGVCtrlCmd,
  MoraiSimProcHandle: MoraiSimProcHandle,
  SetTrafficLight: SetTrafficLight,
  EgoVehicleStatus: EgoVehicleStatus,
  ObjectStatus: ObjectStatus,
  WaitForTick: WaitForTick,
  RadarDetections: RadarDetections,
  CollisionData: CollisionData,
  MapSpec: MapSpec,
  GPSMessage: GPSMessage,
  SkateboardCtrlCmd: SkateboardCtrlCmd,
  FaultInjection_Response: FaultInjection_Response,
  DillyCmd: DillyCmd,
  SyncModeSetGear: SyncModeSetGear,
  TrafficLight: TrafficLight,
  SyncModeInfo: SyncModeInfo,
  VehicleSpec: VehicleSpec,
  MoraiTLInfo: MoraiTLInfo,
  SyncModeCmdResponse: SyncModeCmdResponse,
  FaultStatusInfo_Vehicle: FaultStatusInfo_Vehicle,
  SkateboardStatus: SkateboardStatus,
  FaultStatusInfo_Sensor: FaultStatusInfo_Sensor,
  DdCtrlCmd: DdCtrlCmd,
  IntscnTL: IntscnTL,
  SaveSensorData: SaveSensorData,
  RadarDetection: RadarDetection,
  GhostMessage: GhostMessage,
  FaultInjection_Controller: FaultInjection_Controller,
  IntersectionControl: IntersectionControl,
  GetTrafficLightStatus: GetTrafficLightStatus,
  CtrlCmd: CtrlCmd,
  SyncModeResultResponse: SyncModeResultResponse,
  MultiPlayEventResponse: MultiPlayEventResponse,
  SyncModeAddObject: SyncModeAddObject,
  ObjectStatusExtended: ObjectStatusExtended,
  VehicleSpecIndex: VehicleSpecIndex,
  EventInfo: EventInfo,
  NpcGhostCmd: NpcGhostCmd,
  FaultStatusInfo_Overall: FaultStatusInfo_Overall,
  ERP42Info: ERP42Info,
  PRStatus: PRStatus,
  PREvent: PREvent,
  VehicleCollision: VehicleCollision,
  IntersectionStatus: IntersectionStatus,
  MultiPlayEventRequest: MultiPlayEventRequest,
  MultiEgoSetting: MultiEgoSetting,
  FaultInjection_Tire: FaultInjection_Tire,
  DillyCmdResponse: DillyCmdResponse,
  MapSpecIndex: MapSpecIndex,
  SyncModeCmd: SyncModeCmd,
  ObjectStatusList: ObjectStatusList,
  SyncModeCtrlCmd: SyncModeCtrlCmd,
  FaultInjection_Sensor: FaultInjection_Sensor,
  EgoVehicleStatusExtended: EgoVehicleStatusExtended,
  MoraiSimProcStatus: MoraiSimProcStatus,
  WoowaDillyStatus: WoowaDillyStatus,
  ScenarioLoad: ScenarioLoad,
  FaultStatusInfo: FaultStatusInfo,
  NpcGhostInfo: NpcGhostInfo,
  MoraiTLIndex: MoraiTLIndex,
  SyncModeRemoveObject: SyncModeRemoveObject,
  SkidSteer6wUGVStatus: SkidSteer6wUGVStatus,
  ObjectStatusListExtended: ObjectStatusListExtended,
  Lamps: Lamps,
};
