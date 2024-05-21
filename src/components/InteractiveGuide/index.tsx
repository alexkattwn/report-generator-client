import Joyride, { CallBackProps, STATUS } from 'react-joyride'

import useJoyride from '@/hooks/useJoyride'

const steps = [
    {
        target: '.first-step',
        content: (
            <div>
                В списке отчетов нужно выбрать
                <br />
                интересующий вас отчет. Далее будет рассмотрен
                <br />
                отчет "Карта учета индивидуальных доз".
            </div>
        ),
    },
    {
        target: '.second-step',
        content: 'Можно свернуть боковую панель.',
    },
    {
        target: '.third-step',
        content: (
            <div>
                В блоке "Параметры" нужно
                <br />
                заполнить поля для сортировки.
            </div>
        ),
    },
    {
        target: '.fourth-step',
        content: (
            <div>
                После выбора параметров
                <br />
                нужно отсортировать таблицу сотрудников.
                <br />
                Это можно сделать нажатием на кнопку "Искать".
            </div>
        ),
    },
    {
        target: '.fifth-step',
        content: (
            <div>
                Для сброса всех полей
                <br />
                нужно нажать на кнопку "Очистить".
            </div>
        ),
    },
    {
        target: '.sixth-step',
        content: (
            <div>
                При надобности можно отсортировать
                <br />
                таблицу по ФИО.
            </div>
        ),
    },
    {
        target: '.seventh-step',
        content: (
            <div>
                Для выбора сотрудника нужно
                <br />
                просто нажать на строку в таблице.
            </div>
        ),
    },
    {
        target: '.eighth-step',
        content: (
            <div>
                Под таблицей представлена инфографика
                <br />
                которая сгенерирована для конкретного сотрудника.
            </div>
        ),
    },
    {
        target: '.ninth-step',
        content: (
            <div>
                По нажатию на кнопку "Посмотреть отчет"
                <br />
                откроется окно с отчетом, который можно будет
                <br />
                скачать или вывести на печать.
            </div>
        ),
    },
    {
        target: '.tenth-step',
        content: (
            <div>
                Есть возможность сохранить
                <br />
                выбранные параметры в фильтр.
            </div>
        ),
    },
    {
        target: '.eleventh-step',
        content: (
            <div>
                Или при надобности выбрать
                <br />
                из уже сохраненных фильтров.
            </div>
        ),
    },
    {
        target: '.twelfth-step',
        content: (
            <div>
                Или при надобности выбрать
                <br />
                из уже сохраненных фильтров.
            </div>
        ),
    },
]

const options = {
    arrowColor: '#fff',
    backgroundColor: '#fff',
    beaconSize: 36,
    overlayColor: 'rgba(0, 0, 0, 0.5)',
    primaryColor: '#f04',
    spotlightShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
    textColor: '#333',
    width: undefined,
    zIndex: 100,
}

const InteractiveGuide: React.FC = () => {
    const { run, setRun } = useJoyride()

    const handleJoyrideCallback = (data: CallBackProps) => {
        const { status } = data

        if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
            setRun(false)
        }
    }

    return (
        <Joyride
            steps={steps}
            run={run}
            continuous
            styles={{
                options,
                spotlight: {
                    zIndex: 101,
                    offset: 0,
                },
            }}
            showProgress
            showSkipButton
            scrollDuration={100}
            locale={{
                back: 'Назад',
                close: 'Закрыть',
                last: 'Последний',
                next: 'Далее',
                skip: 'Пропустить',
            }}
            disableOverlayClose
            callback={handleJoyrideCallback}
        />
    )
}

export default InteractiveGuide
