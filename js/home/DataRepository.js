import {
    AsyncStorage,
} from 'react-native';

export class DataRepository {

    /**
     * 请求网络
     * @param url
     */
    fetchData(url) {
        return new Promise((resolve, reject) => {
            debugger
            this.fetchLocalData(url).then((localData) => {
                //本地有数据
                if (localData) {
                    resolve(localData.data,true)
                }
            }).catch(e => reject(e))
                .then(() => {
                    //本地没数据
                    this.fetchNewData(url).then(datas => {
                         resolve(datas)
                    })
                })


        })
    }

    /**
     * 获取网络数据
     * @param url
     */
    fetchNewData(url) {
        return new Promise((resolve, reject) => {
            fetch(url).then((response) => response.json())
                .catch(e => reject(e))
                .then(responseData => {
                    resolve(responseData)
                    //存本地
                    this._saveLocalData(url, responseData)
                })
        }).catch(e => {
            reject(e)
        })
    }

    /**
     * 存本地数据
     * @param responseData
     * @private
     */
    _saveLocalData(url, data, callback) {
        if (!data || !url) return;
        let wrapData = {data: data, update_date: new Date().getTime()};
        AsyncStorage.setItem(url, JSON.stringify(wrapData), callback);
    }

    /**
     * 获取本地数据
     * @param url
     * @returns {Promise<T | never>}
     */
    fetchLocalData(url) {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(url, (error, result) => {
                if (!error) {
                    try {
                        resolve(JSON.parse(result))
                    } catch (e) {
                        reject(e)
                    }
                } else {
                    reject(error)
                }
            })
        })
    }
}