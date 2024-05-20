import { AnimatePresence, motion } from 'framer-motion'

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
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ModalWindow
