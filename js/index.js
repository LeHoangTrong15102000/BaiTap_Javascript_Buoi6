// Bài toán nhân viên

// Đối tượng là nhân viên
const nhanVien = {
  maNhanVien: '',
  tenNhanVien: '',
  heSoChucVu: '',
  chucVu: '',
  luongCoBan: '',
  soGioLam: '',

  // Xây dựng hàm tính lương nhân viện dựa trên số giờ làm và hệ số chức vụ
  tinhTongLuong() {},

  // Xây dựng hàm xếp loại nhân viên trong một tháng dựa trên số giờ làm trong tháng.
  xepLoaiNV() {},
};

// Xây dựng nút button
document.querySelector('#btnXacNhan').onclick = () => {
  // Lấy thông tin người dùng cho vào các biến trong object
  nhanVien.maNhanVien = document.querySelector('#maNhanVien').value;
  nhanVien.tenNhanVien = document.querySelector('#tenNhanVien').value;
  nhanVien.heSoChucVu = document.querySelector('#chucVu').value;
  nhanVien.luongCoBan = document.querySelector('#luongCoBan').value;
  nhanVien.soGioLam = document.querySelector('#soGioLamTrongThang').value;

  // Lấy ra mảng các thẻ option

  const selectChucVu = document.querySelector('#chucVu');

  const arrTagOption = selectChucVu.options; // lấy ra các thẻ option là con của selectChucVu

  const indexOptionSelected = selectChucVu.selectedIndex; // trả về các giá trị index của option

  // console.log(arrTagOption[indexOptionSelected].innerHTML); // Lấy ra nội dung của thẻ Option

  nhanVien.chucVu = arrTagOption[indexOptionSelected].innerHTML;

  // console.log('arrTagOption', arrTagOption);
};
