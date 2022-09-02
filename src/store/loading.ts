import {
    atom,
} from 'recoil';
import { getRecoil, setRecoil } from "recoil-nexus";

const $loading = atom({
    key: 'LOADING',
    default: false
});

export const setLoading = (value: boolean) => {
    setRecoil($loading, value);
}

export const getLoading = (): boolean => {
    return getRecoil($loading);
}

export const toggleLoading = () => {
    const loading = getRecoil($loading);
    setRecoil($loading, !loading);
}

export default $loading;