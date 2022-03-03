import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

function Cart(props) {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {props.state.map((a, i) => {
            return (
              <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.quan}</td>
                <td>
                  <button
                    onClick={() => {
                      props.dispatch({
                        type: "수량증가",
                        payload: { name: "kim" },
                      });
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      props.dispatch({ type: "수량감소" });
                    }}
                  >
                    -
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {props.alert열렸니 === true ? (
        <div className="my-alert2">
          <p>지금 구매하시면 신규할일 20%</p>
          <button
            onClick={() => {
              props.dispatch({ type: "false" });
            }}
          >
            닫기
          </button>
        </div>
      ) : null}
    </div>
  );
}

function 함수명(state) {
  // store 안에 있던 state를 props로 만들어주는
  return {
    // state: state, // props에 state 추가
    state: state.reducer,
    alert열렸니: state.reducer2,
  };
}
export default connect(함수명)(Cart);
// export default Cart;
