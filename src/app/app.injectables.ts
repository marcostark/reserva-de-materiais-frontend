// const HOST = 'http://localhost:8080';
const HOST = 'http://192.168.100.8:8080';

export const CCBST_INJECTABLES = [
    
    { provide: 'AUTH_ENDPOINT', useValue: HOST + '/login' },
        
    { provide: 'MARCA_ENDPOINT', useValue: HOST + '/marcas/' },
    { provide: 'MEDIDA_ENDPOINT', useValue: HOST + '/medidas/' },
    { provide: 'TIPO_ESTABELECIMENTO_ENDPOINT', useValue: HOST + '/tipo-estabelecimento/' },
    { provide: 'TIPO_PRODUTO_ENDPOINT', useValue: HOST + '/tipo-produto/' },
    { provide: 'ITEM_ENDPOINT', useValue: HOST + '/itens/' },
    { provide: 'LOCAL_ENDPOINT', useValue: HOST + '/locais/' },
    { provide: 'ESTABELECIMENTO_ENDPOINT', useValue: HOST + '/estabelecimentos/' },
    { provide: 'PRODUTO_ENDPOINT', useValue: HOST + '/produtos/' },
    { provide: 'USUARIO_ENDPOINT', useValue: HOST + '/usuarios/' },
    { provide: 'RECUPERAR_SENHA_ENDPOINT', useValue: HOST + '/auth/forgot/' },

    { provide: 'PAGE_SIZE', useValue: '20' },
];