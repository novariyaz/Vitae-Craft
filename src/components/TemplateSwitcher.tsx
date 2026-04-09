import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styles from '../styles/components/TemplateSwitcher.module.css'
import Skeleton from '@riyazurrazak/react-skeleton'
import MetaData from '../data/TemplatesMeta'

function TemplateSwitcher() {
    const history = useHistory();
    const { id: currentId } = useParams<{ id: string }>();
    const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

    const handleImageLoad = (index: number) => {
        setLoadedImages(prev => ({ ...prev, [index]: true }));
    }

    const handleSwitch = (templateId: string) => {
        history.push(`/editor/${templateId}`);
    };

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <h3 className={styles.title}>Switch Template</h3>
                <p className={styles.subtitle}>Choose a different layout for your resume</p>
            </div>
            
            <div className={styles.grid}>
                {MetaData.map((template: any, index: number) => {
                    const isLoaded = loadedImages[index] || false;
                    const isActive = template.id === currentId;
                    // Ensure image path is clean regardless of trailing slashes in PUBLIC_URL
                    const publicUrl = process.env.PUBLIC_URL.replace(/\/$/, '');
                    const imageSrc = `${publicUrl}/${template.src.replace(/^\//, '')}`;

                    return (
                        <div 
                            key={template.id} 
                            className={`${styles.card} ${isActive ? styles.active : ''}`}
                            onClick={() => handleSwitch(template.id)}
                        >
                            {!isLoaded && (
                                <Skeleton 
                                    className={styles.skeleton} 
                                    isLoading={true} 
                                    wave 
                                    width="100%" 
                                    height="120px" 
                                    backgroundColor="var(--bg-workspace)" 
                                    highlightColor="var(--border-light)"
                                >
                                    <span></span>
                                </Skeleton>
                            )}

                            <div className={styles.imageContainer}>
                                <img 
                                    className={`${styles.image} ${isLoaded ? styles.imageVisible : styles.imageHidden}`}
                                    onLoad={() => handleImageLoad(index)} 
                                    onError={(e) => {
                                        handleImageLoad(index);
                                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150x200?text=Preview';
                                    }}
                                    src={imageSrc}  
                                    alt={template.alt} 
                                />
                                {isActive && (
                                    <div className={styles.activeBadge}>
                                        <span>Active</span>
                                    </div>
                                )}
                            </div>
                            
                            <div className={styles.footer}>
                                <div className={styles.templateName}>Template {index + 1}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TemplateSwitcher
