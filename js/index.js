// Bài toán nhân viên

// Đối tượng là nhân viên
const nhanVien = {
  // **************** Props
  maNhanVien: '',
  tenNhanVien: '',
  heSoChucVu: '',
  chucVu: '',
  luongCoBan: '',
  soGioLam: '',

  // ******************* Methods
  // Xây dựng hàm tính lương nhân viện dựa trên số giờ làm và hệ số chức vụ
  tinhTongLuong() {
    let tongLuong = 0;

    if (this.chucVu === 'Giám đốc') {
      tongLuong = this.luongCoBan * this.heSoChucVu;
    } else if (this.chucVu === 'Quản lý') {
      tongLuong = this.luongCoBan * this.heSoChucVu;
    } else if (this.chucVu === 'Nhân viên') {
      tongLuong = this.luongCoBan * this.heSoChucVu;
    }
    return tongLuong;
  },

  // Xây dựng hàm xếp loại nhân viên trong một tháng dựa trên số giờ làm trong tháng.
  xepLoaiNV() {
    let ketQuaXepLoai = '';

    // Nếu chưa điền số giờ làm thì bắt phải điền giờ làm vào
    if (this.soGioLam === '') return 'Yêu cầu điền số giờ làm trong tháng';

    // Đánh giá nhân viên dựa trên số giờ làm việc trong tháng
    if (this.soGioLam > 50 && this.soGioLam <= 80) {
      ketQuaXepLoai = 'Trung bình';
    } else if (this.soGioLam > 80 && this.soGioLam <= 100) {
      ketQuaXepLoai = 'Khá';
    } else if (this.soGiolam > 100 && this.soGioLam <= 120) {
      ketQuaXepLoai = 'Giỏi';
    } else ketQuaXepLoai = 'Xuất sắc';

    return ketQuaXepLoai;
  },
};

// Xây dựng nút button
document.querySelector('#btnXacNhan').onclick = () => {
  // Lấy thông tin người dùng cho vào các biến trong object
  nhanVien.maNhanVien = document.querySelector('#maNhanVien').value;
  nhanVien.tenNhanVien = document.querySelector('#tenNhanVien').value;
  nhanVien.heSoChucVu = document.querySelector('#chucVu').value;
  nhanVien.luongCoBan = Number(document.querySelector('#luongCoBan').value);
  nhanVien.soGioLam = document.querySelector('#soGioLamTrongThang').value;

  // console.log(nhanVien.heSoChucVu);

  // Lấy ra mảng các thẻ option

  const selectChucVu = document.querySelector('#chucVu');

  const arrTagOption = selectChucVu.options; // lấy ra các thẻ option là con của selectChucVu

  const indexOptionSelected = selectChucVu.selectedIndex; // trả về các giá trị index của option

  // console.log(arrTagOption[indexOptionSelected].innerHTML); // Lấy ra nội dung của thẻ Option

  nhanVien.chucVu = arrTagOption[indexOptionSelected].innerHTML;

  // console.log('arrTagOption', arrTagOption);

  document.querySelector('#text-tenNhanVien').textContent =
    nhanVien.tenNhanVien;
  document.querySelector('#text-maNhanVien').textContent = nhanVien.maNhanVien;
  document.querySelector('#text-chucVu').textContent = nhanVien.chucVu;

  const tongLuong = nhanVien.tinhTongLuong();
  const xepLoaiNhanVien = nhanVien.xepLoaiNV();

  document.querySelector('#text-tongLuong').textContent = tongLuong;
  document.querySelector('#text-xepLoaiTrongThang').textContent =
    xepLoaiNhanVien;
};
