// biến này chứa thông tin người dùng
const customers = [
    {
      name: "Lê Thị Kiều Linh",
      age: 20,
    },
    {
      name: "Cao Như Uyên",
      age: 20,
    },
    {
      name: "Nguyễn Thị Phương Nguyên",
      age: 20,
    },
    {
      name: "Trần Thị Anh Thư",
      age: 20,
    },
  ];
  
  // hàm này đùng để render dữ liệu vào DOM
  const handleRenderDOM = () => {
    const list_customers = document.querySelector(".list_customers");
    customers.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item.name;
      list_customers.appendChild(li);
    });
  };
  
  handleRenderDOM();
  
  // biến này để lấy ra nut random trong file HTML
  const button = document.querySelector("button");
  
  // hàm dùng để random
  const randomCustomers = () => {
    const result_random = document.querySelector("#result_random");
    result_random.style.display = "block";
    const result_name = document.querySelector("#result_name");
    const random = Number.parseInt(Math.random() * customers.length);
    const result = customers[random];
    result_name.textContent = result.name;
  };
  
  // thiết lập sự kiện cho nút random
  button.addEventListener("click", randomCustomers);
  
  // biến này lấy ra nút restart
  const btn_restart = document.querySelector("#btn_reset");
  
  // thiết lập sự kiện cho nút restart
  btn_restart.addEventListener("click", () => {
    const result_random = document.querySelector("#result_random");
    result_random.style.display = "none";
  });
  