import reducer from "./Auth";
import * as actionTypes from "./../actions/actionTypes";

describe("Auth Reducer", ()=> {
    it("Should return initial state",()=>{
        expect(reducer(undefined,{})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: "/",
          })
    })

    it("should upon token",()=>{
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: "/",
          },{
            type: actionTypes.AUTH_SUCCESS,
            idToken: "idToken",
            userId: "userId",
          })).toEqual({
            token: "idToken",
            userId: "userId",
            error: null,
            loading: false,
            authRedirectPath: "/",
          })
    })
})