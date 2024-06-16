import axios from "axios";

const JSON_SERVER_HOST = "https://numerous-open-continent.glitch.me";

export const getExpenses = async () => {
    try {
        const response = await axios.get(`${JSON_SERVER_HOST}/expenses`);
        return response.data;
    } catch (error) {
        console.log(error)
        alert("뭔가 잘못된 것 같아요!! 데이터를 로드할 수가 없어요");
    };
};

export const getExpense = async ({ queryKey }) => {
    try {
        const response = await axios.get(`${JSON_SERVER_HOST}/expenses/${queryKey[1]}`);
        return response.data;
    } catch (error) {
        console.log(error)
        alert("뭔가 잘못된 것 같아요!! 데이터를 로드할 수가 없어요");
    };
};

export const postExpense = async (newExpense) => {
    try {
        const response = await axios.post(`${JSON_SERVER_HOST}/expenses`, newExpense);
        return response.data
    } catch (error) {
        console.log(error);
        alert("뭔가 잘못된 것 같아요!! 데이터가 써지지가 않아요")
    }
}

export const putExpense = async (updatedExpense) => {
    const { id, ...rest } = updatedExpense;
    try {
        const response = await axios.put(`${JSON_SERVER_HOST}/expenses/${id}`, rest);
        return response.data
    } catch (error) {
        console.log(error);
        alert("뭔가 잘못된 것 같아요!! 데이터가 수정되지가 않아요")
    }
}

export const deleteExpense = async (id) => {
    try {
        const response = await axios.delete(`${JSON_SERVER_HOST}/expenses/${id}`);
        return response.data
    } catch (error) {
        console.log(error);
        alert("뭔가 잘못된 것 같아요!! 데이터가 삭제되지가 않아요")
    }
}   