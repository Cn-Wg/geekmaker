import axios from "axios";
export default {
    state:{
        goods:[],
        allSelected:true
    },
    mutations:{
        getGoods(state,params){
            state.goods = params;
        },
        handleReduce(state,index){
            if(state.goods[index].num <=1 ){
                state.goods[index].num = 1;
            }else{
                state.goods[index].num--;
            }
        },
        handleAdd(state,index){
            state.goods[index].num++;
        },
        handleGoodsItemCheckBox(state,index){
            state.goods[index].flag = !state.goods[index].flag;
            var bStop = true;
            for(var i = 0;i<state.goods.length;i++){
                if(!state.goods[i].flag){
                    bStop = false;
                     break;
                }
            }
            state.allSelected = bStop;
        },
        handleToglleAll(state){
            state.allSelected = !state.allSelected;
            state.goods.map((item)=>{
                item.flag = state.allSelected;
            })
        }
    },
    getters:{
        goodsCount(state){
            let goodsCountPrice = 0;
            state.goods.filter((item)=>{
                if(item.flag){
                    goodsCountPrice += item.num * (item.price*10)/10;
                }
            })
            return goodsCountPrice
        }
    },
    actions: {
        getGoods({commit}){
            axios({
                method:"get",
                url:"http://localhost:3000/goods"
            })
            .then((data)=>{
                data.data.map((item)=>{
                    item.flag = true;
                })
                commit("getGoods",data.data);
            })
        },
        handleDel({dispatch},index){
            axios({
                method:"delete",
                url:"http://localhost:3000/goods/"+index
            }).then(()=>{
                dispatch("getGoods");
            })
        }
    },
    namespaced: true
}