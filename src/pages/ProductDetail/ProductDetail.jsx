import Button from '../../components/UI/Button'
import formatter from '../../services/formatter'
import Input from '../../components/UI/Input'

export default function ProductDetail() {
  return (
    <>
      <div className="space-y-2">
        <div className="bg-white shadow-sm">
          <div className="flex flex-col md:flex-row p-4">
            <div className="w-2/5 self-center">
              <img
                className="h-full w-full object-contain"
                src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-gold-220907_inline.jpg.large.jpg"
                alt=""
              />
            </div>
            <div className="md:w-3/5 space-y-4">
              <div className="text-lg">
                Apple iPhone 14 Pro Max Apple iPhone 14 Pro Max Apple iPhone 14 Pro Max Apple iPhone
              </div>
              <div className="flex">
                <div className="text-yellow-500 pe-4 border-e border-e-slate-400">
                  <span>5.0 </span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                </div>
                <div className="px-4 border-e border-e-slate-400">1.2k Ratings</div>
                <div className="ps-4">3.4k Sold</div>
              </div>
              <div className="flex space-x-4">
                <div className="text-lg text-slate-400 line-through">
                  {formatter.format(100000)}
                </div>
                <div className="text-2xl text-red-500">{formatter.format(80000)}</div>
                <div className="self-center bg-orange-500 text-slate-100 text-xs w-14 h-4 text-center rounded-sm">
                  20% OFF
                </div>
              </div>
              <div className="grid gap-2 lg:grid-cols-6 grid-cols-3">
                <Button className="p-2 border border-sky-500 text-sky-500 rounded-md">128GB</Button>
                <Button className="p-2 border rounded-md">128GB</Button>
                <Button className="p-2 border rounded-md">128GB</Button>
              </div>
              <div className="grid gap-2 lg:grid-cols-6 grid-cols-3">
                <Button className="p-2 border border-sky-500 text-sky-500 rounded-md">
                  Natural
                </Button>
                <Button className="p-2 border rounded-md">Blue</Button>
                <Button className="p-2 border rounded-md">White</Button>
                <Button className="p-2 border rounded-md">Black</Button>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-slate-500">Quantity</div>
                <div className="flex">
                  <Button
                    type="button"
                    className="border py-1 px-2 rounded-s-sm active:bg-slate-300"
                  >
                    -
                  </Button>
                  <Input
                    type="number"
                    className="w-12 text-center p-1 outline-none border-t border-b"
                  />
                  <Button
                    type="button"
                    className="border py-1 px-2 rounded-e-sm active:bg-slate-300"
                  >
                    +
                  </Button>
                </div>
                <div className="text-slate-500">448 pieces available</div>
              </div>
              <div className="flex items-center space-x-4">
                <Button
                  type="button"
                  className="border border-sky-500 py-3 px-8 bg-sky-200 text-slate-600"
                >
                  Add To Cart
                </Button>
                <Button type="button" className="py-3 px-8 bg-sky-500 text-slate-100">
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="bg-white shadow-sm">
          <div className="p-6">
            <div className="text-lg py-4">Product Specifications</div>
            <table>
              <thead>
                <tr>
                  <td className="w-36"></td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Category</td>
                  <td>Products {'>'} Product Detail</td>
                </tr>
                <tr>
                  <td>Discount Stock</td>
                  <td>448</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-6">
            <div className="text-lg py-4">Product Description</div>
            <div>
              Đánh giá điện thoại iPhone 15 Pro Max có gì mới iPhone 15 Pro Max đem lại một diện mạo
              hoàn toàn mới và sở hữu nhiều tính năng ưu việt cùng công nghệ tiên tiến. Hãy khám phá
              các đánh giá chi tiết về sản phẩm về khía cạnh thiết kế, màn hình, hiệu năng, thời
              lượng pin và bộ camera độc đáo qua các thông tin dưới đây! Hiệu năng mạnh mẽ cùng
              chipset A17 Pro tiên tiến Sản phẩm trang bị chip A17 Pro được sản xuất trên tiến trình
              3nm, mang lại bước cải tiến đột phá. Nhờ những cải tiến về thiết kế và kiến trúc vi
              mô, CPU mới nhanh hơn đến 10%, hỗ trợ tính năng như Giọng nói cá nhân hay tự động sửa
              lỗi chuyên nghiệp. Không chỉ vậy, GPU nhanh hơn đến 20% với thiết kế 6 lõi mới nhằm
              nâng cao hiệu suất và tiết kiệm năng lượng. Đánh giá điện thoại iPhone 15 Pro Max
              (Ảnh: Apple.com) iPhone 15 Pro đã có một bước tiến đáng kể với công nghệ dò tia tăng
              tốc phần cứng, với tốc độ nhanh hơn gấp 4 lần so với các phiên bản trước đây dùng công
              nghệ dò tia dựa trên phần mềm. Kết quả của sự cải tiến này là trải nghiệm đồ họa trên
              thiết bị trở nên mượt mà hơn, đặc biệt là trải nghiệm khi chơi game và sử dụng ứng
              dụng thực tế ảo (AR) sẽ trở nên sống động hơn. Người dùng sẽ có trải nghiệm chiến game
              mượt mà hơn với: Resident Evil 4, Seadth Stranding, Resident Evil Village hay
              Assassin's Creed Mirage,... Đánh giá điện thoại iPhone 15 Pro Max (Ảnh: Apple.com)
              Chip A17 Pro được trang bị một bộ giải mã AV1 đặc biệt, giúp nâng cao chất lượng video
              và tiết kiệm pin khi bạn sử dụng các dịch vụ truyền phát. Đồng thời, bộ điều khiển USB
              mới đã được cải tiến để hỗ trợ tốc độ USB 3 lần đầu xuất hiện trên iPhone, cung cấp
              khả năng truyền dữ liệu nhanh hơn đáng kể và hỗ trợ đầu ra video với độ phân giải HDR
              4K ở tốc độ 60 fps. Công nghệ màn hình vượt trội Màn hình OLED trên iPhone 15 Pro Max
              là một điểm đặc biệt không thể bỏ qua. Với kích thước 6,7 inch cùng độ phân giải đỉnh
              cao 2796x1179 pixel, tần số quét 120Hz và mật độ điểm ảnh lên đến 460 ppi, màn hình
              mang đến trải nghiệm ấn tượng cho người dùng. Nó còn được trang bị công nghệ HDR, giúp
              hiển thị màu sắc và độ sáng chân thực hơn bao giờ hết. Công nghệ màn hình vượt trội
              (Ảnh: Apple.com) Thêm vào đó, công nghệ TrueTone hiện đại đã được tích hợp, tự động
              điều chỉnh màu sắc của màn hình dựa trên môi trường xung quanh. Với sự kết hợp này,
              bạn có thể thấy rõ ràng rằng màn hình của iPhone 15 Pro Max tạo ra trải nghiệm xem
              phim, chơi game và lướt web vượt trội với hình ảnh sống động, rực rỡ, và màu sắc chân
              thực. Tính năng Dynamic Island độc đáo Dù không phải lần đầu xuất hiện trên iPhone,
              nhưng việc Dynamic Island tiếp tục được trang bị trên Apple iPhone 15 Pro Max vẫn đáp
              ứng được nhu cầu của người dùng. Dynamic Island mang đến trải nghiệm thú vị, đa dạng
              tính năng như âm nhạc, xem maps mà không cần thoát khỏi ứng dụng đang mở. Bên cạnh đó,
              với tính năng cập nhật thông báo theo thời gian thực mang đến tính tiện lợi khi sử
              dụng điện thoại IP 15 Pro Max. Màn hình iPhone 15 Pro Max (Ảnh: Apple.com) Dung lượng
              pin sử dụng thoải mái, cổng kết nối USB-C iPhone 15 Pro Max sở hữu viên pin có dung
              lượng lớn hơn đáng kể so với thế hệ trước đó. Với viên pin này, bạn có thể thưởng thức
              video lên đến 29 giờ, xem video trực tuyến lên đến 25 giờ, nghe nhạc lên đến 95 giờ
              (tuỳ vào tác vụ khác nhau mà thời gian có thể thay đổi). Nhờ vậy, bạn có thể thoải mái
              sử dụng cả ngày mà không lo gián đoạn giữa chừng.
            </div>
          </div>
        </div>
        <div className="bg-white shadow-sm">
          <div className="p-6">
            <div className="text-lg py-4">Product Ratings</div>
            <div className="h-56">
              <div className="text-lg">
                <div className="text-sky-500">
                  <span className="text-2xl">4.5</span> out of 5
                </div>
                <div className="text-yellow-500 text-xl">
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
