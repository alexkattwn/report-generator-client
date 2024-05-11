import { AnimatePresence, motion } from 'framer-motion'
import { IoCloseOutline } from 'react-icons/io5'

import { useMode } from '@/hooks/useMode'
import useModal from '@/hooks/useModal'

import cls from '@components/ModalWindow/index.module.scss'

interface ModalWindowProps {
    children: React.ReactNode
}

const ModalWindow: React.FC<ModalWindowProps> = ({ children }) => {
    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    const { showModal, setShowModal } = useModal()

    const handleCloseModal = () => {
        setShowModal()
    }

    return (
        <AnimatePresence>
            {showModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={cls.modal}
                    onClick={() => setShowModal()}
                >
                    <div
                        className={`${cls.modal__content} ${darkModeClass}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {children}
                        <button
                            className={`${cls.modal__content__close} ${darkModeClass}`}
                            onClick={handleCloseModal}
                        >
                            <IoCloseOutline size={56} />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ModalWindow
