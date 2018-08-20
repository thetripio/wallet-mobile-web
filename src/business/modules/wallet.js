import Wallet from 'trip-wallet';

export default function ({ app, $axios }, inject) {

    let wallet = Wallet();
    wallet.setProvider(app.$network.get().host, 10000);

    wallet.getTransactions = (params) => {
        params.module = 'account';
        
        return $axios.get(app.$network.get().api, {
            params: params
        });
    };

    app.$wallet = wallet;

    inject('wallet', wallet);
}