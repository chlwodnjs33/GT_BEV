
"use strict";

let SkidSteer6wUGVCtrlCmd = require('./SkidSteer6wUGVCtrlCmd.js');
let VehicleSpecIndex = require('./VehicleSpecIndex.js');
let FaultStatusInfo_Sensor = require('./FaultStatusInfo_Sensor.js');
let TrafficLight = require('./TrafficLight.js');
let EgoVehicleStatusExtended = require('./EgoVehicleStatusExtended.js');
let SyncModeRemoveObject = require('./SyncModeRemoveObject.js');
let IntersectionStatus = require('./IntersectionStatus.js');
let ObjectStatusListExtended = require('./ObjectStatusListExtended.js');
let PRCtrlCmd = require('./PRCtrlCmd.js');
let SyncModeCmd = require('./SyncModeCmd.js');
let ObjectStatusExtended = require('./ObjectStatusExtended.js');
let FaultStatusInfo_Overall = require('./FaultStatusInfo_Overall.js');
let GhostMessage = require('./GhostMessage.js');
let NpcGhostCmd = require('./NpcGhostCmd.js');
let FaultInjection_Tire = require('./FaultInjection_Tire.js');
let SkidSteer6wUGVStatus = require('./SkidSteer6wUGVStatus.js');
let ERP42Info = require('./ERP42Info.js');
let SyncModeCtrlCmd = require('./SyncModeCtrlCmd.js');
let SetTrafficLight = require('./SetTrafficLight.js');
let MultiPlayEventResponse = require('./MultiPlayEventResponse.js');
let PRStatus = require('./PRStatus.js');
let MoraiTLIndex = require('./MoraiTLIndex.js');
let MoraiSimProcStatus = require('./MoraiSimProcStatus.js');
let FaultStatusInfo_Vehicle = require('./FaultStatusInfo_Vehicle.js');
let MoraiSrvResponse = require('./MoraiSrvResponse.js');
let SaveSensorData = require('./SaveSensorData.js');
let ReplayInfo = require('./ReplayInfo.js');
let RadarDetection = require('./RadarDetection.js');
let DillyCmd = require('./DillyCmd.js');
let ObjectStatus = require('./ObjectStatus.js');
let SkateboardStatus = require('./SkateboardStatus.js');
let ObjectStatusList = require('./ObjectStatusList.js');
let MultiEgoSetting = require('./MultiEgoSetting.js');
let FaultInjection_Response = require('./FaultInjection_Response.js');
let SyncModeInfo = require('./SyncModeInfo.js');
let MoraiTLInfo = require('./MoraiTLInfo.js');
let CtrlCmd = require('./CtrlCmd.js');
let RadarDetections = require('./RadarDetections.js');
let SkateboardCtrlCmd = require('./SkateboardCtrlCmd.js');
let WoowaDillyStatus = require('./WoowaDillyStatus.js');
let FaultInjection_Sensor = require('./FaultInjection_Sensor.js');
let Lamps = require('./Lamps.js');
let MultiPlayEventRequest = require('./MultiPlayEventRequest.js');
let FaultInjection_Controller = require('./FaultInjection_Controller.js');
let ScenarioLoad = require('./ScenarioLoad.js');
let SyncModeResultResponse = require('./SyncModeResultResponse.js');
let VehicleCollision = require('./VehicleCollision.js');
let MapSpecIndex = require('./MapSpecIndex.js');
let GPSMessage = require('./GPSMessage.js');
let SyncModeCmdResponse = require('./SyncModeCmdResponse.js');
let WaitForTickResponse = require('./WaitForTickResponse.js');
let MoraiSimProcHandle = require('./MoraiSimProcHandle.js');
let IntersectionControl = require('./IntersectionControl.js');
let SensorPosControl = require('./SensorPosControl.js');
let DillyCmdResponse = require('./DillyCmdResponse.js');
let SVADC = require('./SVADC.js');
let VehicleSpec = require('./VehicleSpec.js');
let NpcGhostInfo = require('./NpcGhostInfo.js');
let VehicleCollisionData = require('./VehicleCollisionData.js');
let IntscnTL = require('./IntscnTL.js');
let EgoVehicleStatus = require('./EgoVehicleStatus.js');
let GetTrafficLightStatus = require('./GetTrafficLightStatus.js');
let SyncModeSetGear = require('./SyncModeSetGear.js');
let WaitForTick = require('./WaitForTick.js');
let SyncModeScenarioLoad = require('./SyncModeScenarioLoad.js');
let SyncModeAddObject = require('./SyncModeAddObject.js');
let CollisionData = require('./CollisionData.js');
let MapSpec = require('./MapSpec.js');
let EgoDdVehicleStatus = require('./EgoDdVehicleStatus.js');
let EventInfo = require('./EventInfo.js');
let DdCtrlCmd = require('./DdCtrlCmd.js');
let FaultStatusInfo = require('./FaultStatusInfo.js');
let PREvent = require('./PREvent.js');

module.exports = {
  SkidSteer6wUGVCtrlCmd: SkidSteer6wUGVCtrlCmd,
  VehicleSpecIndex: VehicleSpecIndex,
  FaultStatusInfo_Sensor: FaultStatusInfo_Sensor,
  TrafficLight: TrafficLight,
  EgoVehicleStatusExtended: EgoVehicleStatusExtended,
  SyncModeRemoveObject: SyncModeRemoveObject,
  IntersectionStatus: IntersectionStatus,
  ObjectStatusListExtended: ObjectStatusListExtended,
  PRCtrlCmd: PRCtrlCmd,
  SyncModeCmd: SyncModeCmd,
  ObjectStatusExtended: ObjectStatusExtended,
  FaultStatusInfo_Overall: FaultStatusInfo_Overall,
  GhostMessage: GhostMessage,
  NpcGhostCmd: NpcGhostCmd,
  FaultInjection_Tire: FaultInjection_Tire,
  SkidSteer6wUGVStatus: SkidSteer6wUGVStatus,
  ERP42Info: ERP42Info,
  SyncModeCtrlCmd: SyncModeCtrlCmd,
  SetTrafficLight: SetTrafficLight,
  MultiPlayEventResponse: MultiPlayEventResponse,
  PRStatus: PRStatus,
  MoraiTLIndex: MoraiTLIndex,
  MoraiSimProcStatus: MoraiSimProcStatus,
  FaultStatusInfo_Vehicle: FaultStatusInfo_Vehicle,
  MoraiSrvResponse: MoraiSrvResponse,
  SaveSensorData: SaveSensorData,
  ReplayInfo: ReplayInfo,
  RadarDetection: RadarDetection,
  DillyCmd: DillyCmd,
  ObjectStatus: ObjectStatus,
  SkateboardStatus: SkateboardStatus,
  ObjectStatusList: ObjectStatusList,
  MultiEgoSetting: MultiEgoSetting,
  FaultInjection_Response: FaultInjection_Response,
  SyncModeInfo: SyncModeInfo,
  MoraiTLInfo: MoraiTLInfo,
  CtrlCmd: CtrlCmd,
  RadarDetections: RadarDetections,
  SkateboardCtrlCmd: SkateboardCtrlCmd,
  WoowaDillyStatus: WoowaDillyStatus,
  FaultInjection_Sensor: FaultInjection_Sensor,
  Lamps: Lamps,
  MultiPlayEventRequest: MultiPlayEventRequest,
  FaultInjection_Controller: FaultInjection_Controller,
  ScenarioLoad: ScenarioLoad,
  SyncModeResultResponse: SyncModeResultResponse,
  VehicleCollision: VehicleCollision,
  MapSpecIndex: MapSpecIndex,
  GPSMessage: GPSMessage,
  SyncModeCmdResponse: SyncModeCmdResponse,
  WaitForTickResponse: WaitForTickResponse,
  MoraiSimProcHandle: MoraiSimProcHandle,
  IntersectionControl: IntersectionControl,
  SensorPosControl: SensorPosControl,
  DillyCmdResponse: DillyCmdResponse,
  SVADC: SVADC,
  VehicleSpec: VehicleSpec,
  NpcGhostInfo: NpcGhostInfo,
  VehicleCollisionData: VehicleCollisionData,
  IntscnTL: IntscnTL,
  EgoVehicleStatus: EgoVehicleStatus,
  GetTrafficLightStatus: GetTrafficLightStatus,
  SyncModeSetGear: SyncModeSetGear,
  WaitForTick: WaitForTick,
  SyncModeScenarioLoad: SyncModeScenarioLoad,
  SyncModeAddObject: SyncModeAddObject,
  CollisionData: CollisionData,
  MapSpec: MapSpec,
  EgoDdVehicleStatus: EgoDdVehicleStatus,
  EventInfo: EventInfo,
  DdCtrlCmd: DdCtrlCmd,
  FaultStatusInfo: FaultStatusInfo,
  PREvent: PREvent,
};
