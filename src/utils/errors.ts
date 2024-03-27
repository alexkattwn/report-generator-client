export const errorException = (error: any) => {
    if (error.message === 'Network Error') {
        alert('Ошибка: Не удалось подключиться к серверу.')
    } else {
        console.log(error.response.data.message)
    }
}
