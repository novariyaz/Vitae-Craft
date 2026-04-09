import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import styles from '../styles/pages/Editor.module.css'
import RightTabs from '../components/Tabs';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

import DownloadIcon from '@material-ui/icons/GetApp';
import Template1 from '../data/templates/template-1';
import Template2 from '../data/templates/template-2';
import Template3 from '../data/templates/template-3';
import Template4 from '../data/templates/template-4';
import Template5 from '../data/templates/template-5';
import Template6 from '../data/templates/template-6';

interface iParams {
    id : string
}

// Map template IDs to their components for better scalability
const TEMPLATE_MAP: Record<string, React.ComponentType> = {
    "6c6066ca-67a5-4a5f-8717-cb2213f42152": Template1,
    "7005392d-a134-47c1-ba59-c87fcc029875": Template2,
    "7d0e0fc1-32f0-4a3f-b83e-1ebaff7d56e7": Template3,
    "1ec3031b-658e-4d8d-bdfc-3c5a1559a53c": Template4,
    "7d2bc835-11c3-4baa-92f8-55a4b716a407": Template5,
    "da7f6200-0ab5-4f71-90d7-2522110b0f57": Template6,
};

function Editor() {
    const { id } = useParams<iParams>();

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, []);

    const SelectedTemplate = useMemo(() => {
        return TEMPLATE_MAP[id] || null;
    }, [id]);

    return (
        <div className={styles.root}>
            <aside className={styles.left} aria-label="Editor Sidebar">
                <RightTabs />
            </aside>

            <main className={styles.right}>
                <div className={`${styles.paper} paper-sim`}>
                    {SelectedTemplate ? (
                        <SelectedTemplate />
                    ) : (
                        <div className={styles.errorState}>
                            <h2>Template Not Found</h2>
                            <p>The template you're looking for doesn't exist or has been moved.</p>
                        </div>
                    )}
                </div>
            </main>

            <Tooltip title="Print / Download PDF" placement="left">
                <Fab 
                    className={styles.fab} 
                    color="primary" 
                    onClick={() => window.print()} 
                    aria-label="print document"
                >
                    <DownloadIcon />
                </Fab>
            </Tooltip>
        </div>
    )
}

export default Editor
