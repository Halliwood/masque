"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YamlClassID = void 0;
var YamlClassID;
(function (YamlClassID) {
    YamlClassID[YamlClassID["Object"] = 0] = "Object";
    YamlClassID[YamlClassID["GameObject"] = 1] = "GameObject";
    YamlClassID[YamlClassID["Component"] = 2] = "Component";
    YamlClassID[YamlClassID["LevelGameManager"] = 3] = "LevelGameManager";
    YamlClassID[YamlClassID["Transform"] = 4] = "Transform";
    YamlClassID[YamlClassID["TimeManager"] = 5] = "TimeManager";
    YamlClassID[YamlClassID["GlobalGameManager"] = 6] = "GlobalGameManager";
    YamlClassID[YamlClassID["Behaviour"] = 8] = "Behaviour";
    YamlClassID[YamlClassID["GameManager"] = 9] = "GameManager";
    YamlClassID[YamlClassID["AudioManager"] = 11] = "AudioManager";
    YamlClassID[YamlClassID["InputManager"] = 13] = "InputManager";
    YamlClassID[YamlClassID["EditorExtension"] = 18] = "EditorExtension";
    YamlClassID[YamlClassID["Physics2DSettings"] = 19] = "Physics2DSettings";
    YamlClassID[YamlClassID["Camera"] = 20] = "Camera";
    YamlClassID[YamlClassID["Material"] = 21] = "Material";
    YamlClassID[YamlClassID["MeshRenderer"] = 23] = "MeshRenderer";
    YamlClassID[YamlClassID["Renderer"] = 25] = "Renderer";
    YamlClassID[YamlClassID["Texture"] = 27] = "Texture";
    YamlClassID[YamlClassID["Texture2D"] = 28] = "Texture2D";
    YamlClassID[YamlClassID["OcclusionCullingSettings"] = 29] = "OcclusionCullingSettings";
    YamlClassID[YamlClassID["GraphicsSettings"] = 30] = "GraphicsSettings";
    YamlClassID[YamlClassID["MeshFilter"] = 33] = "MeshFilter";
    YamlClassID[YamlClassID["OcclusionPortal"] = 41] = "OcclusionPortal";
    YamlClassID[YamlClassID["Mesh"] = 43] = "Mesh";
    YamlClassID[YamlClassID["Skybox"] = 45] = "Skybox";
    YamlClassID[YamlClassID["QualitySettings"] = 47] = "QualitySettings";
    YamlClassID[YamlClassID["Shader"] = 48] = "Shader";
    YamlClassID[YamlClassID["TextAsset"] = 49] = "TextAsset";
    YamlClassID[YamlClassID["Rigidbody2D"] = 50] = "Rigidbody2D";
    YamlClassID[YamlClassID["Collider2D"] = 53] = "Collider2D";
    YamlClassID[YamlClassID["Rigidbody"] = 54] = "Rigidbody";
    YamlClassID[YamlClassID["PhysicsManager"] = 55] = "PhysicsManager";
    YamlClassID[YamlClassID["Collider"] = 56] = "Collider";
    YamlClassID[YamlClassID["Joint"] = 57] = "Joint";
    YamlClassID[YamlClassID["CircleCollider2D"] = 58] = "CircleCollider2D";
    YamlClassID[YamlClassID["HingeJoint"] = 59] = "HingeJoint";
    YamlClassID[YamlClassID["PolygonCollider2D"] = 60] = "PolygonCollider2D";
    YamlClassID[YamlClassID["BoxCollider2D"] = 61] = "BoxCollider2D";
    YamlClassID[YamlClassID["PhysicsMaterial2D"] = 62] = "PhysicsMaterial2D";
    YamlClassID[YamlClassID["MeshCollider"] = 64] = "MeshCollider";
    YamlClassID[YamlClassID["BoxCollider"] = 65] = "BoxCollider";
    YamlClassID[YamlClassID["CompositeCollider2D"] = 66] = "CompositeCollider2D";
    YamlClassID[YamlClassID["EdgeCollider2D"] = 68] = "EdgeCollider2D";
    YamlClassID[YamlClassID["CapsuleCollider2D"] = 70] = "CapsuleCollider2D";
    YamlClassID[YamlClassID["ComputeShader"] = 72] = "ComputeShader";
    YamlClassID[YamlClassID["AnimationClip"] = 74] = "AnimationClip";
    YamlClassID[YamlClassID["ConstantForce"] = 75] = "ConstantForce";
    YamlClassID[YamlClassID["TagManager"] = 78] = "TagManager";
    YamlClassID[YamlClassID["AudioListener"] = 81] = "AudioListener";
    YamlClassID[YamlClassID["AudioSource"] = 82] = "AudioSource";
    YamlClassID[YamlClassID["AudioClip"] = 83] = "AudioClip";
    YamlClassID[YamlClassID["RenderTexture"] = 84] = "RenderTexture";
    YamlClassID[YamlClassID["CustomRenderTexture"] = 86] = "CustomRenderTexture";
    YamlClassID[YamlClassID["Cubemap"] = 89] = "Cubemap";
    YamlClassID[YamlClassID["Avatar"] = 90] = "Avatar";
    YamlClassID[YamlClassID["AnimatorController"] = 91] = "AnimatorController";
    YamlClassID[YamlClassID["RuntimeAnimatorController"] = 93] = "RuntimeAnimatorController";
    YamlClassID[YamlClassID["ScriptMapper"] = 94] = "ScriptMapper";
    YamlClassID[YamlClassID["Animator"] = 95] = "Animator";
    YamlClassID[YamlClassID["TrailRenderer"] = 96] = "TrailRenderer";
    YamlClassID[YamlClassID["DelayedCallManager"] = 98] = "DelayedCallManager";
    YamlClassID[YamlClassID["TextMesh"] = 102] = "TextMesh";
    YamlClassID[YamlClassID["RenderSettings"] = 104] = "RenderSettings";
    YamlClassID[YamlClassID["Light"] = 108] = "Light";
    YamlClassID[YamlClassID["CGProgram"] = 109] = "CGProgram";
    YamlClassID[YamlClassID["BaseAnimationTrack"] = 110] = "BaseAnimationTrack";
    YamlClassID[YamlClassID["Animation"] = 111] = "Animation";
    YamlClassID[YamlClassID["MonoBehaviour"] = 114] = "MonoBehaviour";
    YamlClassID[YamlClassID["MonoScript"] = 115] = "MonoScript";
    YamlClassID[YamlClassID["MonoManager"] = 116] = "MonoManager";
    YamlClassID[YamlClassID["Texture3D"] = 117] = "Texture3D";
    YamlClassID[YamlClassID["NewAnimationTrack"] = 118] = "NewAnimationTrack";
    YamlClassID[YamlClassID["Projector"] = 119] = "Projector";
    YamlClassID[YamlClassID["LineRenderer"] = 120] = "LineRenderer";
    YamlClassID[YamlClassID["Flare"] = 121] = "Flare";
    YamlClassID[YamlClassID["Halo"] = 122] = "Halo";
    YamlClassID[YamlClassID["LensFlare"] = 123] = "LensFlare";
    YamlClassID[YamlClassID["FlareLayer"] = 124] = "FlareLayer";
    YamlClassID[YamlClassID["HaloLayer"] = 125] = "HaloLayer";
    YamlClassID[YamlClassID["NavMeshProjectSettings"] = 126] = "NavMeshProjectSettings";
    YamlClassID[YamlClassID["Font"] = 128] = "Font";
    YamlClassID[YamlClassID["PlayerSettings"] = 129] = "PlayerSettings";
    YamlClassID[YamlClassID["NamedObject"] = 130] = "NamedObject";
    YamlClassID[YamlClassID["PhysicMaterial"] = 134] = "PhysicMaterial";
    YamlClassID[YamlClassID["SphereCollider"] = 135] = "SphereCollider";
    YamlClassID[YamlClassID["CapsuleCollider"] = 136] = "CapsuleCollider";
    YamlClassID[YamlClassID["SkinnedMeshRenderer"] = 137] = "SkinnedMeshRenderer";
    YamlClassID[YamlClassID["FixedJoint"] = 138] = "FixedJoint";
    YamlClassID[YamlClassID["BuildSettings"] = 141] = "BuildSettings";
    YamlClassID[YamlClassID["AssetBundle"] = 142] = "AssetBundle";
    YamlClassID[YamlClassID["CharacterController"] = 143] = "CharacterController";
    YamlClassID[YamlClassID["CharacterJoint"] = 144] = "CharacterJoint";
    YamlClassID[YamlClassID["SpringJoint"] = 145] = "SpringJoint";
    YamlClassID[YamlClassID["WheelCollider"] = 146] = "WheelCollider";
    YamlClassID[YamlClassID["ResourceManager"] = 147] = "ResourceManager";
    YamlClassID[YamlClassID["PreloadData"] = 150] = "PreloadData";
    YamlClassID[YamlClassID["ConfigurableJoint"] = 153] = "ConfigurableJoint";
    YamlClassID[YamlClassID["TerrainCollider"] = 154] = "TerrainCollider";
    YamlClassID[YamlClassID["TerrainData"] = 156] = "TerrainData";
    YamlClassID[YamlClassID["LightmapSettings"] = 157] = "LightmapSettings";
    YamlClassID[YamlClassID["WebCamTexture"] = 158] = "WebCamTexture";
    YamlClassID[YamlClassID["EditorSettings"] = 159] = "EditorSettings";
    YamlClassID[YamlClassID["EditorUserSettings"] = 162] = "EditorUserSettings";
    YamlClassID[YamlClassID["AudioReverbFilter"] = 164] = "AudioReverbFilter";
    YamlClassID[YamlClassID["AudioHighPassFilter"] = 165] = "AudioHighPassFilter";
    YamlClassID[YamlClassID["AudioChorusFilter"] = 166] = "AudioChorusFilter";
    YamlClassID[YamlClassID["AudioReverbZone"] = 167] = "AudioReverbZone";
    YamlClassID[YamlClassID["AudioEchoFilter"] = 168] = "AudioEchoFilter";
    YamlClassID[YamlClassID["AudioLowPassFilter"] = 169] = "AudioLowPassFilter";
    YamlClassID[YamlClassID["AudioDistortionFilter"] = 170] = "AudioDistortionFilter";
    YamlClassID[YamlClassID["SparseTexture"] = 171] = "SparseTexture";
    YamlClassID[YamlClassID["AudioBehaviour"] = 180] = "AudioBehaviour";
    YamlClassID[YamlClassID["AudioFilter"] = 181] = "AudioFilter";
    YamlClassID[YamlClassID["WindZone"] = 182] = "WindZone";
    YamlClassID[YamlClassID["Cloth"] = 183] = "Cloth";
    YamlClassID[YamlClassID["SubstanceArchive"] = 184] = "SubstanceArchive";
    YamlClassID[YamlClassID["ProceduralMaterial"] = 185] = "ProceduralMaterial";
    YamlClassID[YamlClassID["ProceduralTexture"] = 186] = "ProceduralTexture";
    YamlClassID[YamlClassID["Texture2DArray"] = 187] = "Texture2DArray";
    YamlClassID[YamlClassID["CubemapArray"] = 188] = "CubemapArray";
    YamlClassID[YamlClassID["OffMeshLink"] = 191] = "OffMeshLink";
    YamlClassID[YamlClassID["OcclusionArea"] = 192] = "OcclusionArea";
    YamlClassID[YamlClassID["Tree"] = 193] = "Tree";
    YamlClassID[YamlClassID["NavMeshAgent"] = 195] = "NavMeshAgent";
    YamlClassID[YamlClassID["NavMeshSettings"] = 196] = "NavMeshSettings";
    YamlClassID[YamlClassID["ParticleSystem"] = 198] = "ParticleSystem";
    YamlClassID[YamlClassID["ParticleSystemRenderer"] = 199] = "ParticleSystemRenderer";
    YamlClassID[YamlClassID["ShaderVariantCollection"] = 200] = "ShaderVariantCollection";
    YamlClassID[YamlClassID["LODGroup"] = 205] = "LODGroup";
    YamlClassID[YamlClassID["BlendTree"] = 206] = "BlendTree";
    YamlClassID[YamlClassID["Motion"] = 207] = "Motion";
    YamlClassID[YamlClassID["NavMeshObstacle"] = 208] = "NavMeshObstacle";
    YamlClassID[YamlClassID["SortingGroup"] = 210] = "SortingGroup";
    YamlClassID[YamlClassID["SpriteRenderer"] = 212] = "SpriteRenderer";
    YamlClassID[YamlClassID["Sprite"] = 213] = "Sprite";
    YamlClassID[YamlClassID["CachedSpriteAtlas"] = 214] = "CachedSpriteAtlas";
    YamlClassID[YamlClassID["ReflectionProbe"] = 215] = "ReflectionProbe";
    YamlClassID[YamlClassID["Terrain"] = 218] = "Terrain";
    YamlClassID[YamlClassID["LightProbeGroup"] = 220] = "LightProbeGroup";
    YamlClassID[YamlClassID["AnimatorOverrideController"] = 221] = "AnimatorOverrideController";
    YamlClassID[YamlClassID["CanvasRenderer"] = 222] = "CanvasRenderer";
    YamlClassID[YamlClassID["Canvas"] = 223] = "Canvas";
    YamlClassID[YamlClassID["RectTransform"] = 224] = "RectTransform";
    YamlClassID[YamlClassID["CanvasGroup"] = 225] = "CanvasGroup";
    YamlClassID[YamlClassID["BillboardAsset"] = 226] = "BillboardAsset";
    YamlClassID[YamlClassID["BillboardRenderer"] = 227] = "BillboardRenderer";
    YamlClassID[YamlClassID["SpeedTreeWindAsset"] = 228] = "SpeedTreeWindAsset";
    YamlClassID[YamlClassID["AnchoredJoint2D"] = 229] = "AnchoredJoint2D";
    YamlClassID[YamlClassID["Joint2D"] = 230] = "Joint2D";
    YamlClassID[YamlClassID["SpringJoint2D"] = 231] = "SpringJoint2D";
    YamlClassID[YamlClassID["DistanceJoint2D"] = 232] = "DistanceJoint2D";
    YamlClassID[YamlClassID["HingeJoint2D"] = 233] = "HingeJoint2D";
    YamlClassID[YamlClassID["SliderJoint2D"] = 234] = "SliderJoint2D";
    YamlClassID[YamlClassID["WheelJoint2D"] = 235] = "WheelJoint2D";
    YamlClassID[YamlClassID["ClusterInputManager"] = 236] = "ClusterInputManager";
    YamlClassID[YamlClassID["BaseVideoTexture"] = 237] = "BaseVideoTexture";
    YamlClassID[YamlClassID["NavMeshData"] = 238] = "NavMeshData";
    YamlClassID[YamlClassID["AudioMixer"] = 240] = "AudioMixer";
    YamlClassID[YamlClassID["AudioMixerController"] = 241] = "AudioMixerController";
    YamlClassID[YamlClassID["AudioMixerGroupController"] = 243] = "AudioMixerGroupController";
    YamlClassID[YamlClassID["AudioMixerEffectController"] = 244] = "AudioMixerEffectController";
    YamlClassID[YamlClassID["AudioMixerSnapshotController"] = 245] = "AudioMixerSnapshotController";
    YamlClassID[YamlClassID["PhysicsUpdateBehaviour2D"] = 246] = "PhysicsUpdateBehaviour2D";
    YamlClassID[YamlClassID["ConstantForce2D"] = 247] = "ConstantForce2D";
    YamlClassID[YamlClassID["Effector2D"] = 248] = "Effector2D";
    YamlClassID[YamlClassID["AreaEffector2D"] = 249] = "AreaEffector2D";
    YamlClassID[YamlClassID["PointEffector2D"] = 250] = "PointEffector2D";
    YamlClassID[YamlClassID["PlatformEffector2D"] = 251] = "PlatformEffector2D";
    YamlClassID[YamlClassID["SurfaceEffector2D"] = 252] = "SurfaceEffector2D";
    YamlClassID[YamlClassID["BuoyancyEffector2D"] = 253] = "BuoyancyEffector2D";
    YamlClassID[YamlClassID["RelativeJoint2D"] = 254] = "RelativeJoint2D";
    YamlClassID[YamlClassID["FixedJoint2D"] = 255] = "FixedJoint2D";
    YamlClassID[YamlClassID["FrictionJoint2D"] = 256] = "FrictionJoint2D";
    YamlClassID[YamlClassID["TargetJoint2D"] = 257] = "TargetJoint2D";
    YamlClassID[YamlClassID["LightProbes"] = 258] = "LightProbes";
    YamlClassID[YamlClassID["LightProbeProxyVolume"] = 259] = "LightProbeProxyVolume";
    YamlClassID[YamlClassID["SampleClip"] = 271] = "SampleClip";
    YamlClassID[YamlClassID["AudioMixerSnapshot"] = 272] = "AudioMixerSnapshot";
    YamlClassID[YamlClassID["AudioMixerGroup"] = 273] = "AudioMixerGroup";
    YamlClassID[YamlClassID["AssetBundleManifest"] = 290] = "AssetBundleManifest";
    YamlClassID[YamlClassID["RuntimeInitializeOnLoadManager"] = 300] = "RuntimeInitializeOnLoadManager";
    YamlClassID[YamlClassID["UnityConnectSettings"] = 310] = "UnityConnectSettings";
    YamlClassID[YamlClassID["AvatarMask"] = 319] = "AvatarMask";
    YamlClassID[YamlClassID["PlayableDirector"] = 320] = "PlayableDirector";
    YamlClassID[YamlClassID["VideoPlayer"] = 328] = "VideoPlayer";
    YamlClassID[YamlClassID["VideoClip"] = 329] = "VideoClip";
    YamlClassID[YamlClassID["ParticleSystemForceField"] = 330] = "ParticleSystemForceField";
    YamlClassID[YamlClassID["SpriteMask"] = 331] = "SpriteMask";
    YamlClassID[YamlClassID["WorldAnchor"] = 362] = "WorldAnchor";
    YamlClassID[YamlClassID["OcclusionCullingData"] = 363] = "OcclusionCullingData";
    YamlClassID[YamlClassID["PrefabInstance"] = 1001] = "PrefabInstance";
    YamlClassID[YamlClassID["EditorExtensionImpl"] = 1002] = "EditorExtensionImpl";
    YamlClassID[YamlClassID["AssetImporter"] = 1003] = "AssetImporter";
    YamlClassID[YamlClassID["AssetDatabaseV1"] = 1004] = "AssetDatabaseV1";
    YamlClassID[YamlClassID["Mesh3DSImporter"] = 1005] = "Mesh3DSImporter";
    YamlClassID[YamlClassID["TextureImporter"] = 1006] = "TextureImporter";
    YamlClassID[YamlClassID["ShaderImporter"] = 1007] = "ShaderImporter";
    YamlClassID[YamlClassID["ComputeShaderImporter"] = 1008] = "ComputeShaderImporter";
    YamlClassID[YamlClassID["AudioImporter"] = 1020] = "AudioImporter";
    YamlClassID[YamlClassID["HierarchyState"] = 1026] = "HierarchyState";
    YamlClassID[YamlClassID["AssetMetaData"] = 1028] = "AssetMetaData";
    YamlClassID[YamlClassID["DefaultAsset"] = 1029] = "DefaultAsset";
    YamlClassID[YamlClassID["DefaultImporter"] = 1030] = "DefaultImporter";
    YamlClassID[YamlClassID["TextScriptImporter"] = 1031] = "TextScriptImporter";
    YamlClassID[YamlClassID["SceneAsset"] = 1032] = "SceneAsset";
    YamlClassID[YamlClassID["NativeFormatImporter"] = 1034] = "NativeFormatImporter";
    YamlClassID[YamlClassID["MonoImporter"] = 1035] = "MonoImporter";
    YamlClassID[YamlClassID["LibraryAssetImporter"] = 1038] = "LibraryAssetImporter";
    YamlClassID[YamlClassID["ModelImporter"] = 1040] = "ModelImporter";
    YamlClassID[YamlClassID["FBXImporter"] = 1041] = "FBXImporter";
    YamlClassID[YamlClassID["TrueTypeFontImporter"] = 1042] = "TrueTypeFontImporter";
    YamlClassID[YamlClassID["EditorBuildSettings"] = 1045] = "EditorBuildSettings";
    YamlClassID[YamlClassID["InspectorExpandedState"] = 1048] = "InspectorExpandedState";
    YamlClassID[YamlClassID["AnnotationManager"] = 1049] = "AnnotationManager";
    YamlClassID[YamlClassID["PluginImporter"] = 1050] = "PluginImporter";
    YamlClassID[YamlClassID["EditorUserBuildSettings"] = 1051] = "EditorUserBuildSettings";
    YamlClassID[YamlClassID["IHVImageFormatImporter"] = 1055] = "IHVImageFormatImporter";
    YamlClassID[YamlClassID["AnimatorStateTransition"] = 1101] = "AnimatorStateTransition";
    YamlClassID[YamlClassID["AnimatorState"] = 1102] = "AnimatorState";
    YamlClassID[YamlClassID["HumanTemplate"] = 1105] = "HumanTemplate";
    YamlClassID[YamlClassID["AnimatorStateMachine"] = 1107] = "AnimatorStateMachine";
    YamlClassID[YamlClassID["PreviewAnimationClip"] = 1108] = "PreviewAnimationClip";
    YamlClassID[YamlClassID["AnimatorTransition"] = 1109] = "AnimatorTransition";
    YamlClassID[YamlClassID["SpeedTreeImporter"] = 1110] = "SpeedTreeImporter";
    YamlClassID[YamlClassID["AnimatorTransitionBase"] = 1111] = "AnimatorTransitionBase";
    YamlClassID[YamlClassID["SubstanceImporter"] = 1112] = "SubstanceImporter";
    YamlClassID[YamlClassID["LightmapParameters"] = 1113] = "LightmapParameters";
    YamlClassID[YamlClassID["LightingDataAsset"] = 1120] = "LightingDataAsset";
    YamlClassID[YamlClassID["SketchUpImporter"] = 1124] = "SketchUpImporter";
    YamlClassID[YamlClassID["BuildReport"] = 1125] = "BuildReport";
    YamlClassID[YamlClassID["PackedAssets"] = 1126] = "PackedAssets";
    YamlClassID[YamlClassID["VideoClipImporter"] = 1127] = "VideoClipImporter";
    YamlClassID[YamlClassID["int"] = 100000] = "int";
    YamlClassID[YamlClassID["bool"] = 100001] = "bool";
    YamlClassID[YamlClassID["float"] = 100002] = "float";
    YamlClassID[YamlClassID["MonoObject"] = 100003] = "MonoObject";
    YamlClassID[YamlClassID["Collision"] = 100004] = "Collision";
    YamlClassID[YamlClassID["Vector3f"] = 100005] = "Vector3f";
    YamlClassID[YamlClassID["RootMotionData"] = 100006] = "RootMotionData";
    YamlClassID[YamlClassID["Collision2D"] = 100007] = "Collision2D";
    YamlClassID[YamlClassID["AudioMixerLiveUpdateFloat"] = 100008] = "AudioMixerLiveUpdateFloat";
    YamlClassID[YamlClassID["AudioMixerLiveUpdateBool"] = 100009] = "AudioMixerLiveUpdateBool";
    YamlClassID[YamlClassID["Polygon2D"] = 100010] = "Polygon2D";
    YamlClassID[YamlClassID["void"] = 100011] = "void";
    YamlClassID[YamlClassID["TilemapCollider2D"] = 19719996] = "TilemapCollider2D";
    YamlClassID[YamlClassID["AssetImporterLog"] = 41386430] = "AssetImporterLog";
    YamlClassID[YamlClassID["VFXRenderer"] = 73398921] = "VFXRenderer";
    YamlClassID[YamlClassID["SerializableManagedRefTestClass"] = 76251197] = "SerializableManagedRefTestClass";
    YamlClassID[YamlClassID["Grid"] = 156049354] = "Grid";
    YamlClassID[YamlClassID["Preset"] = 181963792] = "Preset";
    YamlClassID[YamlClassID["EmptyObject"] = 277625683] = "EmptyObject";
    YamlClassID[YamlClassID["IConstraint"] = 285090594] = "IConstraint";
    YamlClassID[YamlClassID["TestObjectWithSpecialLayoutOne"] = 293259124] = "TestObjectWithSpecialLayoutOne";
    YamlClassID[YamlClassID["AssemblyDefinitionReferenceImporter"] = 294290339] = "AssemblyDefinitionReferenceImporter";
    YamlClassID[YamlClassID["SiblingDerived"] = 334799969] = "SiblingDerived";
    YamlClassID[YamlClassID["TestObjectWithSerializedMapStringNonAlignedStruct"] = 342846651] = "TestObjectWithSerializedMapStringNonAlignedStruct";
    YamlClassID[YamlClassID["SubDerived"] = 367388927] = "SubDerived";
    YamlClassID[YamlClassID["AssetImportInProgressProxy"] = 369655926] = "AssetImportInProgressProxy";
    YamlClassID[YamlClassID["PluginBuildInfo"] = 382020655] = "PluginBuildInfo";
    YamlClassID[YamlClassID["EditorProjectAccess"] = 426301858] = "EditorProjectAccess";
    YamlClassID[YamlClassID["PrefabImporter"] = 468431735] = "PrefabImporter";
    YamlClassID[YamlClassID["TestObjectWithSerializedArray"] = 478637458] = "TestObjectWithSerializedArray";
    YamlClassID[YamlClassID["TestObjectWithSerializedAnimationCurve"] = 478637459] = "TestObjectWithSerializedAnimationCurve";
    YamlClassID[YamlClassID["TilemapRenderer"] = 483693784] = "TilemapRenderer";
    YamlClassID[YamlClassID["SpriteAtlasDatabase"] = 638013454] = "SpriteAtlasDatabase";
    YamlClassID[YamlClassID["AudioBuildInfo"] = 641289076] = "AudioBuildInfo";
    YamlClassID[YamlClassID["CachedSpriteAtlasRuntimeData"] = 644342135] = "CachedSpriteAtlasRuntimeData";
    YamlClassID[YamlClassID["RendererFake"] = 646504946] = "RendererFake";
    YamlClassID[YamlClassID["AssemblyDefinitionReferenceAsset"] = 662584278] = "AssemblyDefinitionReferenceAsset";
    YamlClassID[YamlClassID["BuiltAssetBundleInfoSet"] = 668709126] = "BuiltAssetBundleInfoSet";
    YamlClassID[YamlClassID["SpriteAtlas"] = 687078895] = "SpriteAtlas";
    YamlClassID[YamlClassID["RayTracingShaderImporter"] = 747330370] = "RayTracingShaderImporter";
    YamlClassID[YamlClassID["RayTracingShader"] = 825902497] = "RayTracingShader";
    YamlClassID[YamlClassID["PlatformModuleSetup"] = 877146078] = "PlatformModuleSetup";
    YamlClassID[YamlClassID["AimConstraint"] = 895512359] = "AimConstraint";
    YamlClassID[YamlClassID["VFXManager"] = 937362698] = "VFXManager";
    YamlClassID[YamlClassID["VisualEffectSubgraph"] = 994735392] = "VisualEffectSubgraph";
    YamlClassID[YamlClassID["VisualEffectSubgraphOperator"] = 994735403] = "VisualEffectSubgraphOperator";
    YamlClassID[YamlClassID["VisualEffectSubgraphBlock"] = 994735404] = "VisualEffectSubgraphBlock";
    YamlClassID[YamlClassID["Prefab"] = 1001480554] = "Prefab";
    YamlClassID[YamlClassID["LocalizationImporter"] = 1027052791] = "LocalizationImporter";
    YamlClassID[YamlClassID["Derived"] = 1091556383] = "Derived";
    YamlClassID[YamlClassID["PropertyModificationsTargetTestObject"] = 1111377672] = "PropertyModificationsTargetTestObject";
    YamlClassID[YamlClassID["ReferencesArtifactGenerator"] = 1114811875] = "ReferencesArtifactGenerator";
    YamlClassID[YamlClassID["AssemblyDefinitionAsset"] = 1152215463] = "AssemblyDefinitionAsset";
    YamlClassID[YamlClassID["SceneVisibilityState"] = 1154873562] = "SceneVisibilityState";
    YamlClassID[YamlClassID["LookAtConstraint"] = 1183024399] = "LookAtConstraint";
    YamlClassID[YamlClassID["MultiArtifactTestImporter"] = 1223240404] = "MultiArtifactTestImporter";
    YamlClassID[YamlClassID["GameObjectRecorder"] = 1268269756] = "GameObjectRecorder";
    YamlClassID[YamlClassID["LightingDataAssetParent"] = 1325145578] = "LightingDataAssetParent";
    YamlClassID[YamlClassID["PresetManager"] = 1386491679] = "PresetManager";
    YamlClassID[YamlClassID["TestObjectWithSpecialLayoutTwo"] = 1392443030] = "TestObjectWithSpecialLayoutTwo";
    YamlClassID[YamlClassID["StreamingManager"] = 1403656975] = "StreamingManager";
    YamlClassID[YamlClassID["LowerResBlitTexture"] = 1480428607] = "LowerResBlitTexture";
    YamlClassID[YamlClassID["StreamingController"] = 1542919678] = "StreamingController";
    YamlClassID[YamlClassID["TestObjectVectorPairStringBool"] = 1628831178] = "TestObjectVectorPairStringBool";
    YamlClassID[YamlClassID["GridLayout"] = 1742807556] = "GridLayout";
    YamlClassID[YamlClassID["AssemblyDefinitionImporter"] = 1766753193] = "AssemblyDefinitionImporter";
    YamlClassID[YamlClassID["ParentConstraint"] = 1773428102] = "ParentConstraint";
    YamlClassID[YamlClassID["FakeComponent"] = 1803986026] = "FakeComponent";
    YamlClassID[YamlClassID["PositionConstraint"] = 1818360608] = "PositionConstraint";
    YamlClassID[YamlClassID["RotationConstraint"] = 1818360609] = "RotationConstraint";
    YamlClassID[YamlClassID["ScaleConstraint"] = 1818360610] = "ScaleConstraint";
    YamlClassID[YamlClassID["Tilemap"] = 1839735485] = "Tilemap";
    YamlClassID[YamlClassID["PackageManifest"] = 1896753125] = "PackageManifest";
    YamlClassID[YamlClassID["PackageManifestImporter"] = 1896753126] = "PackageManifestImporter";
    YamlClassID[YamlClassID["TerrainLayer"] = 1953259897] = "TerrainLayer";
    YamlClassID[YamlClassID["SpriteShapeRenderer"] = 1971053207] = "SpriteShapeRenderer";
    YamlClassID[YamlClassID["NativeObjectType"] = 1977754360] = "NativeObjectType";
    YamlClassID[YamlClassID["TestObjectWithSerializedMapStringBool"] = 1981279845] = "TestObjectWithSerializedMapStringBool";
    YamlClassID[YamlClassID["SerializableManagedHost"] = 1995898324] = "SerializableManagedHost";
    YamlClassID[YamlClassID["VisualEffectAsset"] = 2058629509] = "VisualEffectAsset";
    YamlClassID[YamlClassID["VisualEffectImporter"] = 2058629510] = "VisualEffectImporter";
    YamlClassID[YamlClassID["VisualEffectResource"] = 2058629511] = "VisualEffectResource";
    YamlClassID[YamlClassID["VisualEffectObject"] = 2059678085] = "VisualEffectObject";
    YamlClassID[YamlClassID["VisualEffect"] = 2083052967] = "VisualEffect";
    YamlClassID[YamlClassID["LocalizationAsset"] = 2083778819] = "LocalizationAsset";
    YamlClassID[YamlClassID["ScriptedImporter"] = 2089858483] = "ScriptedImporter";
})(YamlClassID = exports.YamlClassID || (exports.YamlClassID = {}));