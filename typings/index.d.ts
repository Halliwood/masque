export interface InnerObjectRefer {
    fileID: number;
}

export interface ObjectRefer extends InnerObjectRefer {
    guid: string;
    type: number;
}

export namespace UnityEngine {
    interface Color {
        r: number;
        g: number;
        b: number;
        a: number;
    }

    interface GameObject {
        m_ObjectHideFlags: number;
        m_PrefabParentObject: InnerObjectRefer;
        m_PrefabInternal: InnerObjectRefer;
        serializedVersion: number;
        m_Component: {
            component: InnerObjectRefer
        }[];
        m_Layer: number;
        m_Name: string;
        m_TagString: string;
        m_Icon: InnerObjectRefer;
        m_NavMeshLayer: number;
        m_StaticEditorFlags: number;
        m_IsActive: number;
    }

    interface MonoBehaviour {
        m_ObjectHideFlags: number;
        m_PrefabParentObject: InnerObjectRefer;
        m_PrefabInternal: InnerObjectRefer;
        m_GameObject: InnerObjectRefer
        m_Enabled: number;
        m_EditorHideFlags: number;
        m_Script: ObjectRefer;
        m_Name: string;
        m_EditorClassIdentifier: string;
    }
}

export namespace UnityEngine.UI {
    interface Text extends MonoBehaviour {
        m_Material: InnerObjectRefer;
        m_Color: Color;
        m_RaycastTarget: number;
        m_OnCullStateChanged: {
            m_PersistentCalls: {
                m_Calls: any[]
            }
            m_TypeName: string
        }
        m_FontData: {
            m_Font: ObjectRefer;
            m_FontSize: number;
            m_FontStyle: number;
            m_BestFit: number;
            m_MinSize: number;
            m_MaxSize: number;
            m_Alignment: number;
            m_AlignByGeometry: number;
            m_RichText: number;
            m_HorizontalOverflow: number;
            m_VerticalOverflow: number;
            m_LineSpacing: number;
        }
        m_Text: string;
    }
}

export type UnityObject = UnityEngine.GameObject | UnityEngine.MonoBehaviour | UnityEngine.UI.Text;
export type MonoTypeNames = 'UnityEngine.GameObject' | 'UnityEngine.MonoBehaviour' | 'UnityEngine.UI.Text';

export interface PaletteCfgColorSet {
    name: string;
    colors: {name: string, color: string}[];
}
export interface PaletteCfg {
    sets: PaletteCfgColorSet[];
}