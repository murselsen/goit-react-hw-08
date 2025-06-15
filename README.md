# PhoneBook Application

Bu proje, modern React ekosistemi kullanılarak geliştirilmiş bir Telefon Rehberi
(PhoneBook) uygulamasıdır. Kullanıcılar kayıt olabilir, giriş yapabilir ve
kişisel rehberlerine kişi ekleyip silebilirler.

## Özellikler

-   Kullanıcı kayıt ve giriş sistemi (JWT token ile kimlik doğrulama)
-   Kişi ekleme, silme ve filtreleme
-   Formik & Yup ile form yönetimi ve doğrulama
-   Redux Toolkit ile global state yönetimi
-   redux-persist ile oturumun korunması
-   react-hot-toast ile bildirimler
-   Responsive ve modern arayüz

## Kullanılan Teknolojiler

-   [React](https://react.dev/)
-   [Redux Toolkit](https://redux-toolkit.js.org/)
-   [React Redux](https://react-redux.js.org/)
-   [Redux Persist](https://github.com/rt2zz/redux-persist)
-   [React Router DOM](https://reactrouter.com/)
-   [react-hot-toast](https://react-hot-toast.com/)
-   [Formik](https://formik.org/)
-   [Yup](https://github.com/jquense/yup)
-   [Axios](https://axios-http.com/)
-   [Vite](https://vitejs.dev/)

## Kurulum

1. **Projeyi klonlayın:**
    ```sh
    git clone https://github.com/murselsen/goit-react-hw-08.git
    cd goit-react-hw-08
    ```
2. **Bağımlılıkları yükleyin:**
    ```sh
    npm install
    ```
3. **Uygulamayı başlatın:**
    ```sh
    npm run dev
    ```
4. Tarayıcınızda `http://localhost:5173` adresine gidin.

## Kullanım

-   Kayıt olmak için ana sayfadaki "Kayıt Ol" butonuna tıklayın ve gerekli
    bilgileri doldurun.
-   Giriş yapmak için "Giriş Yap" butonuna tıklayın ve kayıtlı e-posta ve
    şifrenizi girin.
-   Giriş yaptıktan sonra, kişisel rehberinize kişi eklemek için "Kişi Ekle"
    butonuna tıklayın.
-   Kişi bilgilerini doldurduktan sonra "Kaydet" butonuna basarak kişiyi
    rehberinize ekleyin.
-   Rehberinizdeki kişileri silmek için, silmek istediğiniz kişinin yanındaki
    "Sil" butonuna tıklayın.
-   Kişileri filtrelemek için, arama çubuğunu kullanarak isim veya diğer
    bilgilere göre arama yapın.
