import { stringify, v4 as uuidv4 } from 'uuid'
const _ = require('lodash');
const PRODUCTS_KEY = 'products'
const AUTH_KEY = 'auth'
const ADMIN_ID = 'admin@admin.com'
const CART_KEY = 'cartData'
const USER_KEY = 'userData'
import cogoToast from 'cogo-toast';


export const fetchcart = () => {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}
export const fetchcartById = (userId) => {
    return fetchcart().find(cart => cart.userId === userId)
}
export const getUserCartIndex = (userId) => {
    return fetchcart().findIndex(cart => cart.userid === userId)
}
export const findUserCartIndex=(userId)=>{
    return fetchcart().findIndex((cart) => cart.userid === userId);
}
export const findItemIndex=(userId, itemId)=>{
    return fetchcart()[findUserCartIndex(userId)].data.findIndex((item) => (item.id === itemId))
}
export const addItemToCart = (userId, data) => {
    let cartData = localStorage.getItem('cartData');
    !cartData?cartData=[]:cartData=JSON.parse(cartData)
    const userIndex = findUserCartIndex(userId)
    if (userIndex !== -1) {
        const existingItemIndex = findItemIndex(userId, data.id)
        if (existingItemIndex !== -1) {
            cartData[userIndex].data[existingItemIndex].count++;
        } else {
            cartData[userIndex].data.push({
                ...data,
                count: 1
            });
        }
    } else {
        const newUserCart = {
            userid: userId,
            data: [{
                ...data,
                count: 1
            }]
        };
        cartData.push(newUserCart);
    }
    cogoToast.success('Item added to Cart!')
    localStorage.setItem('cartData', JSON.stringify(cartData));
}
export const removeCartItem = (userId, itemId) => {
    let cartData = fetchcart()
    const userCartIndex = findUserCartIndex(userId)
    if (userCartIndex !== -1) {
        const itemIndex = findItemIndex(userId, itemId)
        if (itemIndex !== -1) cartData[userCartIndex].data.splice(itemIndex, 1);
    }
    localStorage.setItem('cartData', JSON.stringify(cartData));
}
export const HandleIncrease = (userId, itemId) => {
    const existingCartData = fetchcart()
    const userCartIndex = findUserCartIndex(userId)
    if (userCartIndex !== -1) {
        const userCart = existingCartData[userCartIndex].data;
        const itemIndex = findItemIndex(userId, itemId)
        if (itemIndex !== -1) {
            if (userCart[itemIndex].count <= userCart[itemIndex].productQuantity) {
                userCart[itemIndex].count += 1;
            }
            else {
                userCart[itemIndex].count = userCart[itemIndex].productQuantity
                // document.getElementById("handleInc").disabled = "true"
            }
            localStorage.setItem(CART_KEY, JSON.stringify(existingCartData));
        }
    }
}
export const HandleDecrease = (userId, itemId) => {
    const existingCartData = fetchcart()
    const userCartIndex = findUserCartIndex(userId)
    if (userCartIndex !== -1) {
        const userCart = existingCartData[userCartIndex].data;
        const itemIndex = findItemIndex(userId, itemId)

        if (itemIndex !== -1) {
            if (userCart[itemIndex].count > 1) {
                userCart[itemIndex].count -= 1;
            }
            else {
                userCart[itemIndex].count = 1
                // document.getElementById("handleDec").disabled = "true"
                // document.getElementById("handleBuy").disabled = "true"
            }
            localStorage.setItem(CART_KEY, JSON.stringify(existingCartData));
        }
    }
}
//for prodct list
export const fetchProductList = () => {
    return JSON.parse(localStorage.getItem(PRODUCTS_KEY)) || []
}
export const fetchProductById = (id) => {
    return fetchProductList().find((item) => item.id === id)
}
export const addProductList = (data) => {
    const product = {
        id: uuidv4(),
        ...data,
    }
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify([...fetchProductList(), product]))
    return product
}
export const updateProductList = (data) => {
    let product = {}
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(fetchProductList().map((item) => {
        if (item.id === data.id) {
            product = {
                ...item,
                ...data,
            }
            return product
        }
        return item
    })))
    return product
}
export const deleteProductById = (id) => {
    return localStorage.setItem(PRODUCTS_KEY, JSON.stringify(fetchProductList().filter((item) => item.id !== id)))
}
// for login and signup
export const fetchUserByEmail = (email) => {
    return fetchUserList().find((item) => item.email === email) || false
}
export const fetchUserById = (id) => {
    // console.log(fetchUserList().find((item) => item.id === id))
    return fetchUserList().find((item) => item.id === id)
}
export const fetchUserList = () => {
    return JSON.parse(localStorage.getItem(USER_KEY)) || []
}
export const verifyUser = (email, password) => {
    const user = fetchUserByEmail(email);
    if (user.password === password) return true
    else return false
}
export const addUserList = (data) => {
    if (!fetchUserByEmail(data.email)) {
        const newUser = {
            id: uuidv4(),
            ...data
        }
        localStorage.setItem(USER_KEY, JSON.stringify([...fetchUserList(), newUser]))
        return newUser
    }
    else return fetchUserByEmail(data.email).id
}
export const updateUserById = (data, id) => {
    let updated = {}
    localStorage.setItem(USER_KEY, JSON.stringify(fetchUserList().map((user) => {
        if (user.id === id) {
            updated = {
                ...user,
                ...data,
            }
            return updated
        }
        return user
    })))
}
export const deleteUserById = (id) => {
    localStorage.setItem(USER_KEY, JSON.stringify(fetchUserList().filter((item) => item.id !== id)))
}
// for Admin Verification 
export const fetchAdminData = () => {
    return JSON.parse(localStorage.getItem("admindata")) || []
}
export const findadminByemail = (email) => {
    return fetchAdminData().find((admin) => admin.email === email)
}
export const verifyAdmin = (email, password) => {
    const emailData = findadminByemail(email)
    if (emailData.password === password) return true
    else return false
}
// For Loggedin User
export const getCurrentLoggedinUser = () => {
    return JSON.parse(localStorage.getItem("LoggedinUserId"))
}
export const UserlogOut = () => {
    localStorage.setItem("LoggedinUserId", JSON.stringify(null))
}
export const addLoggedInUser = (user) => {
    localStorage.setItem(AUTH_KEY, JSON.stringify(user))
}
export const getLoggedInUser = () => {
    return JSON.parse(localStorage.getItem(AUTH_KEY))
}
export const addAdminInUsers = () => {
    const admin = fetchUserById(ADMIN_ID)
    if (admin) {
        return
    }
    addUserList({
        name: 'John Doe',
        email: ADMIN_ID,
        password: 'admin',
        isAdmin: true,
    })
}