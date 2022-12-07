// em nivel de backend, o valor do produto vem em centavos, então é necessário converter para real, 
//por questoes de performance, essa conversão é feita no front.
export const coverMoneyCentInReal = (moneyCent: number) => {
    const moneyReal = moneyCent / 100
    return moneyReal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
