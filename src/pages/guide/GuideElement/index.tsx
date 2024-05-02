import { IGuide } from '@/types/common'
import { useMode } from '@/hooks/useMode'

import cls from '@/pages/guide/GuideElement/index.module.scss'

interface GuideElementProps {
    element: IGuide
}

const GuideElement: React.FC<GuideElementProps> = ({ element }) => {
    const { mode } = useMode()

    return (
        <div className={cls.element}>
            <span>{element.title}</span>
            {mode === 'dark' ? (
                <>
                    {element.image_dark && (
                        <img
                            className={cls.element__img}
                            src={`data:image/jpeg;base64,${element.image_dark}`}
                            alt='img'
                        />
                    )}
                </>
            ) : (
                <>
                    {element.image_light && (
                        <img
                            className={cls.element__img}
                            src={`data:image/jpeg;base64,${element.image_light}`}
                            alt='img'
                        />
                    )}
                </>
            )}
            <span>{element.description}</span>
        </div>
    )
}

export default GuideElement
