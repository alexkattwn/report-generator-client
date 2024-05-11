import { IGuide } from '@/types/common'
import { useMode } from '@/hooks/useMode'
import ModalWindow from '@/components/ModalWindow'
import useModal from '@/hooks/useModal'

import cls from '@/pages/guide/GuideElement/index.module.scss'

interface GuideElementProps {
    element: IGuide
}

const GuideElement: React.FC<GuideElementProps> = ({ element }) => {
    const { mode } = useMode()
    const { setShowModal } = useModal()

    return (
        <>
            <div className={cls.element}>
                <span>{element.title}</span>
                {mode === 'dark' ? (
                    <>
                        {element.image_dark && (
                            <img
                                className={cls.element__img}
                                src={`data:image/jpeg;base64,${element.image_dark}`}
                                alt='Dark Image'
                                onClick={() => setShowModal()}
                            />
                        )}
                    </>
                ) : (
                    <>
                        {element.image_light && (
                            <img
                                className={cls.element__img}
                                src={`data:image/jpeg;base64,${element.image_light}`}
                                alt='Light Image'
                                onClick={() => setShowModal()}
                            />
                        )}
                    </>
                )}
                <span>{element.description}</span>
            </div>
            <ModalWindow>
                {mode === 'dark' ? (
                    <>
                        {element.image_dark && (
                            <img
                                className={cls.element__img__modal}
                                src={`data:image/jpeg;base64,${element.image_dark}`}
                                alt='Dark Image'
                            />
                        )}
                    </>
                ) : (
                    <>
                        {element.image_light && (
                            <img
                                className={cls.element__img__modal}
                                src={`data:image/jpeg;base64,${element.image_light}`}
                                alt='Light Image'
                            />
                        )}
                    </>
                )}
            </ModalWindow>
        </>
    )
}

export default GuideElement
