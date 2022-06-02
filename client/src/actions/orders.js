import * as api from '../api/index';
import {ORDERS_FETCH_ALL} from "../constants/actions/orders";

export const fetchOrder = (id, onSuccess, onError) => async () => {
    try {
        const orderData = await api.fetchOrder(id);
        onSuccess(orderData.data);
    } catch (e) {
        onError(e.response.data);
    }
}

export const updateOrder = (id, status, onSuccess, onError) => async () => {
    try {
        await api.updateOrder(id, status);
        onSuccess();
    } catch (e) {
        onError(e.response.data);
    }
}

export const fetchOrders = (page, onSuccess, onError) => async (dispatch) => {
    try {
        const ordersData = await api.fetchOrders(page).then(res => res.data);
        dispatch({type: ORDERS_FETCH_ALL, data: ordersData});
        onSuccess();
    } catch (e) {
        onError(e);
    }
}

export const postOrder = (data, onSuccess, onError) => async (dispatch) => {
    try {
        // const [name, email, phone, country, city, area,
        //     street, building_number, floor, apartment_number] = data;
        const ordersData = await api.postOrder(data).then(res => res.data);
        onSuccess();
    } catch (e) {
        onError(e);
    }
}