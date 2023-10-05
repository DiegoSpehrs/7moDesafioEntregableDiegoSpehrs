import {cartsModel} from '../../DAOS/managers/carts.manager.js';

class CartsMongo {
    async getAllCarts(){
        try {
            const carts = await cartsModel.find({})
            return carts
        } catch (error) {
            return error
        }
    }

    async getCartById(cid){
        try {
            const cart = await cartsModel.findById(cid).populate('products',['title', 'price', 'code', 'quantity'])
        } catch (error) {
            return error
        }
    }

    async createCart(obj){
        try {
            const cart = await cartsModel.create(obj)
            return cart
        } catch (error) {
            return error
        }
    }

    async cartDeleted(cid){
        try {
            const response = await cartsModel.findByIdAndDelete(cid)
            return response
        } catch (error) {
            return error
        }
    }

    async productDelete(cid,pid){
        try {
            const cart = await cartsModel.findById(cid)
            if(!cart) throw new Error('Cart not found')
            const response = await cartsModel.updateOne({_id:cid},{$pull:{products:pid}})
            return response
        } catch (error) {
            return error
        }
    }

    async updateProduct(cid,pid,quantity){
        try {
            const cart = await cartsModel.findById(cid)
            if(!cart) throw new Error('Cart not found')
            const response = await cartsModel.findById(cid).updateOne({_id:pid},{$inc:{quantity:quantity}})
            return response
        } catch (error) {
            return error
        }
    }

    async addProduct(cid,pid){
        try {
            const cart = await cartsModel.findById(cid).updateOne({$push:{products:pid}})
            return cart
        } catch (error) {
            return error
        }
    }
}

export const cartMongo = new CartsMongo()