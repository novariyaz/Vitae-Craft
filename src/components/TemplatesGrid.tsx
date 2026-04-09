import React, { useState } from 'react'
import styles from '../styles/components/TemplateGrid.module.css'
import Skeleton from '@riyazurrazak/react-skeleton'
import {Link} from 'react-router-dom'
import MetaData from '../data/TemplatesMeta'

function Grid() {
    // Record of template indexes that have finished loading their images
    const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

    const handleImageLoad = (index: number) => {
        setLoadedImages(prev => ({ ...prev, [index]: true }));
    }

    return (
        <div className={styles.root}>
            {MetaData.map((template: any, index: number) => {
                const isLoaded = loadedImages[index] || false;
                // Ensure image path is clean regardless of trailing slashes in PUBLIC_URL
                const publicUrl = process.env.PUBLIC_URL.replace(/\/$/, '');
                const imageSrc = `${publicUrl}/${template.src.replace(/^\//, '')}`;

                return (
                    <div 
                        key={template.id} 
                        className={styles.card}
                        style={{ animation: `fadeIn 0.5s ease-out ${index * 0.1}s both` }}
                    >
                        {/* Skeleton shown while loading */}
                        {!isLoaded && (
                            <Skeleton 
                                className={styles.skeleton} 
                                isLoading={true} 
                                wave 
                                width="100%" 
                                height="350px" 
                                backgroundColor="var(--bg-workspace)" 
                                highlightColor="var(--border-light)"
                            >
                                <span></span>
                            </Skeleton>
                        )}

                        <Link to={`/editor/${template.id}`} className={styles.link}>
                            <img 
                                className={`${styles.image} ${isLoaded ? styles.imageVisible : styles.imageHidden}`}
                                onLoad={() => handleImageLoad(index)} 
                                onError={(e) => {
                                    // Fallback if image fails to load
                                    handleImageLoad(index);
                                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x400?text=Template+Preview';
                                }}
                                src={imageSrc}  
                                alt={template.alt} 
                            />
                            
                            {isLoaded && (
                                <div className={styles.hoverOverlay}>
                                    <span className={styles.cta}>Use Template</span>
                                </div>
                            )}
                        </Link>
                        
                        <div className={styles.footer}>
                            <div className={styles.title}>Foundation {index + 1}</div>
                            <div className={styles.id}>REF: {template.id.slice(0, 8)}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Grid
