import { FaFacebook, FaInstagram, FaStar, FaTwitter } from "react-icons/fa";
import Banner from "./Banner";
import Faq from "./Faq";
import Services from "./Services";
import Trainer1 from "../../assets/T-01.png";
import Trainer2 from "../../assets/T-02.png";
import Trainer3 from "../../assets/T-03.png";
import { Link } from "react-router-dom";

const Home = () => {
  const faqItems = [
    {
      question: "How can I place an order on GadgerBD?",
      answer:
        "To place an order on GadgerBD, follow these simple steps: Browse our product catalog and select the item you want to purchase. Click the 'Add to Cart' button. Review the items in your cart. Provide your shipping information and payment details. Once confirmed, click Place Order.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods, including credit/debit cards, PayPal, and other secure online payment options.",
    },
    {
      question: "What is your return and refund policy?",
      answer:
        "Our return and refund policy can be found in our 'Returns & Refunds' section. We outline the conditions for returns and the process for requesting a refund.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we do offer international shipping. Please note that additional shipping fees may apply, and delivery times can vary based on your location.",
    },
  ];

  return (
    <div>
      <Banner> </Banner>
      <Services isHome={true}></Services>

      <div>
        <h1 className="text-center mt-20 font-bold text-4xl font-heading">
          Why Chose Tripify?
        </h1>
        <div className="grid justify-center lg:grid-cols-4 md:grid-cols-2 items-center md:mt-10 place-items-center space-y-6 lg:space-y-0">
          <div className="md:flex grid place-items-center items-center gap-1 mt-6 lg:mt-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="34"
              viewBox="0 0 40 34"
              fill="none"
            >
              <path
                d="M34.4429 23.0991H5.55755C4.20644 23.0991 3.11133 22.004 3.11133 20.6529V5.55734C3.11133 4.20623 4.20644 3.11111 5.55755 3.11111H34.4424C35.7935 3.11111 36.8887 4.20623 36.8887 5.55734V20.6524C36.8891 22.004 35.794 23.0991 34.4429 23.0991Z"
                fill="#AECDFB"
              />
              <path
                d="M24.019 15.1742H9.25499C9.00966 15.1742 8.81055 14.9751 8.81055 14.7298C8.81055 14.4844 9.00966 14.2853 9.25499 14.2853H24.019C24.2648 14.2853 24.4634 14.4844 24.4634 14.7298C24.4634 14.9751 24.2648 15.1742 24.019 15.1742Z"
                fill="#0C0C0C"
              />
              <path
                d="M23.008 11.0218H5.74132C5.49599 11.0218 5.29688 10.8227 5.29688 10.5773C5.29688 10.332 5.49599 10.1329 5.74132 10.1329H23.008C23.2538 10.1329 23.4524 10.332 23.4524 10.5773C23.4524 10.8227 23.2533 11.0218 23.008 11.0218Z"
                fill="#0C0C0C"
              />
              <path
                d="M11.272 26.2102H2.44178C1.09556 26.2102 0 25.1147 0 23.7684V2.44178C0 1.09556 1.09556 0 2.44178 0H37.5582C38.9044 0 40 1.09556 40 2.44178V4.15822C40 4.40355 39.8013 4.60266 39.5555 4.60266C39.3098 4.60266 39.1111 4.40355 39.1111 4.15822V2.44178C39.1111 1.58533 38.4146 0.888888 37.5582 0.888888H2.44178C1.58533 0.888888 0.888889 1.58533 0.888889 2.44178V23.768C0.888889 24.6244 1.58533 25.3209 2.44178 25.3209H11.272C11.5173 25.3209 11.7164 25.5195 11.7164 25.7653C11.7164 26.0111 11.5173 26.2102 11.272 26.2102Z"
                fill="#0C0C0C"
              />
              <path
                d="M20.3639 26.2102H16.4933C16.2479 26.2102 16.0488 26.0115 16.0488 25.7658C16.0488 25.52 16.2479 25.3213 16.4933 25.3213H20.3639C20.6097 25.3213 20.8084 25.52 20.8084 25.7658C20.8084 26.0115 20.6097 26.2102 20.3639 26.2102Z"
                fill="#0C0C0C"
              />
              <path
                d="M37.5581 26.2102H24.2342C23.9884 26.2102 23.7897 26.0115 23.7897 25.7658C23.7897 25.52 23.9884 25.3213 24.2342 25.3213H37.5581C38.4146 25.3213 39.111 24.6249 39.111 23.7684V21.9009H4.56749C4.32216 21.9009 4.12305 21.7022 4.12305 21.4564C4.12305 21.2107 4.32216 21.012 4.56749 21.012H39.5555C39.8013 21.012 39.9999 21.2107 39.9999 21.4564V23.7684C39.9999 25.1147 38.9044 26.2102 37.5581 26.2102Z"
                fill="#0C0C0C"
              />
              <path
                d="M29.137 33.6338H11.589C11.3436 33.6338 11.1445 33.4351 11.1445 33.1893C11.1445 31.4133 12.5894 29.9684 14.3659 29.9684H14.6828L16.069 25.6302C16.1436 25.3969 16.3952 25.2662 16.6276 25.3427C16.8614 25.4173 16.9903 25.6671 16.9156 25.9013L15.4308 30.5484C15.3721 30.7324 15.2005 30.8573 15.0072 30.8573H14.3654C13.2312 30.8573 12.2836 31.6707 12.0756 32.7449H28.6494C28.4414 31.6707 27.4934 30.8573 26.3596 30.8573H25.7183C25.525 30.8573 25.3539 30.7324 25.2952 30.5484L23.8103 25.9013C23.7352 25.6675 23.8645 25.4173 24.0979 25.3427C24.333 25.2649 24.5819 25.3969 24.6565 25.6302L26.0427 29.9684H26.3596C28.1361 29.9684 29.581 31.4133 29.581 33.1893C29.5814 33.4351 29.3823 33.6338 29.137 33.6338Z"
                fill="#0C0C0C"
              />
              <path
                d="M20.8154 23.7733H19.9132C19.6679 23.7733 19.4688 23.5747 19.4688 23.3289C19.4688 23.0831 19.6679 22.8844 19.9132 22.8844H20.8154C21.0612 22.8844 21.2599 23.0831 21.2599 23.3289C21.2599 23.5747 21.0612 23.7733 20.8154 23.7733Z"
                fill="#0C0C0C"
              />
              <path
                d="M35.6874 14.3731C35.6203 14.3731 35.5527 14.357 35.4906 14.3245L32.705 12.8599L29.919 14.3245C29.7771 14.3997 29.6043 14.3874 29.4742 14.2924C29.3441 14.1977 29.279 14.0376 29.3061 13.8792L29.8379 10.7768L27.5846 8.58014C27.4697 8.46777 27.4279 8.30007 27.4778 8.14714C27.5276 7.99422 27.6598 7.88269 27.8187 7.85946L30.9333 7.40703L32.3265 4.58471C32.4684 4.29619 32.942 4.29619 33.0839 4.58471L34.4771 7.40703L37.5914 7.85946C37.7506 7.88269 37.8824 7.99422 37.9327 8.14714C37.9821 8.30007 37.9412 8.46777 37.8258 8.58014L35.5721 10.7768L36.104 13.8792C36.131 14.0376 36.0659 14.1977 35.9363 14.2924C35.8619 14.346 35.7749 14.3731 35.6874 14.3731ZM28.7873 8.57296L30.5869 10.3274C30.6862 10.4241 30.7318 10.5643 30.7081 10.7012L30.2832 13.1784L32.5082 12.0087C32.6319 11.9436 32.7781 11.9436 32.9019 12.0087L35.1264 13.1784L34.7019 10.7012C34.6782 10.5643 34.7239 10.4245 34.8231 10.3274L36.6231 8.57296L34.1358 8.21178C33.9981 8.19192 33.8794 8.10532 33.8177 7.9807L32.705 5.72614L31.5923 7.97986C31.5306 8.10448 31.4119 8.19108 31.2742 8.21093L28.7873 8.57296Z"
                fill="#0C0C0C"
              />
            </svg>
            <h1 className=" text-descriptionColor text-xl">Popular Place</h1>
          </div>
          <div className="md:flex grid place-items-center items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="44"
              viewBox="0 0 41 44"
              fill="none"
            >
              <path
                d="M20.4997 29.2147C24.6006 29.2147 27.9251 25.8902 27.9251 21.7892C27.9251 17.6882 24.6006 14.3638 20.4997 14.3638C16.3987 14.3638 13.0742 17.6882 13.0742 21.7892C13.0742 25.8902 16.3987 29.2147 20.4997 29.2147Z"
                fill="#AECDFB"
              />
              <path
                d="M20.4997 43.7704C20.4438 43.7704 20.3874 43.7606 20.332 43.7402C8.2712 39.3101 1.59957 28.0776 0.50093 10.3549C0.48634 10.118 0.644887 9.90499 0.875899 9.85101C6.38954 8.56902 11.2714 6.55751 15.3849 3.87194C15.6101 3.72506 15.9111 3.78829 16.058 4.01346C16.2049 4.23864 16.1416 4.54017 15.9165 4.68656C11.8079 7.36873 6.95856 9.39239 1.49793 10.7036C2.65736 28.0056 8.93019 38.5164 20.667 42.8278C20.9195 42.9202 21.0483 43.1999 20.9559 43.4518C20.884 43.6483 20.6977 43.7704 20.4997 43.7704Z"
                fill="#0C0C0C"
              />
              <path
                d="M20.5 43.7703C20.4018 43.7703 20.3045 43.7402 20.2218 43.6828C20.0915 43.5919 20.0137 43.443 20.0137 43.284V31.5272C20.0137 31.2583 20.2316 31.0409 20.5 31.0409C20.7685 31.0409 20.9864 31.2583 20.9864 31.5272V42.5788C32.302 38.12 38.3638 27.6807 39.5013 10.7036C32.0739 8.92063 25.8532 5.85571 20.9864 1.5832V8.24947C20.9864 8.51793 20.7685 8.73582 20.5 8.73582C20.2316 8.73582 20.0137 8.51793 20.0137 8.24947V0.486018C20.0137 0.292455 20.1284 0.116886 20.3064 0.0400437C20.4845 -0.0367982 20.6911 -0.00129529 20.8322 0.131476C25.771 4.75317 32.2612 8.02381 40.1239 9.85148C40.3554 9.90547 40.5139 10.1185 40.4988 10.3553C39.4002 28.0776 32.7286 39.3106 20.6678 43.7402C20.6133 43.7601 20.5564 43.7703 20.5 43.7703Z"
                fill="#0C0C0C"
              />
              <path
                d="M20.4996 32.0135C18.1223 32.0135 15.8112 31.1741 13.9909 29.6509C13.7851 29.4787 13.7579 29.1719 13.9301 28.9661C14.1022 28.7599 14.4086 28.7322 14.6153 28.9053C16.2606 30.2827 18.3504 31.0414 20.4996 31.0414C25.5565 31.0414 29.6705 26.9274 29.6705 21.8704C29.6705 16.8135 25.5565 12.6985 20.4996 12.6985C15.4426 12.6985 11.3282 16.8125 11.3282 21.8699C11.3282 22.1384 11.1103 22.3563 10.8418 22.3563C10.5733 22.3563 10.3555 22.1384 10.3555 21.8699C10.3555 16.2765 14.9062 11.7258 20.4996 11.7258C26.093 11.7258 30.6432 16.2765 30.6432 21.8699C30.6432 27.4633 26.093 32.0135 20.4996 32.0135Z"
                fill="#0C0C0C"
              />
              <path
                d="M19.8768 25.6152C19.7372 25.6152 19.604 25.5548 19.5121 25.4503L16.3499 21.8567C16.1724 21.6549 16.1918 21.348 16.3936 21.1705C16.5955 20.9925 16.9028 21.0129 17.0799 21.2143L19.8744 24.3891L25.2056 18.2286C25.3807 18.0253 25.6886 18.0039 25.8914 18.179C26.0947 18.3551 26.1166 18.6619 25.941 18.8652L20.2445 25.4469C20.1526 25.5534 20.0193 25.6147 19.8788 25.6152C19.8783 25.6152 19.8773 25.6152 19.8768 25.6152Z"
                fill="#0C0C0C"
              />
            </svg>
            <h1 className=" text-descriptionColor text-xl">100% Safe</h1>
          </div>
          <div className="md:flex grid place-items-center items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="62"
              height="31"
              viewBox="0 0 62 31"
              fill="none"
            >
              <path
                d="M42.7832 3.44376H16.0254V23.4704H42.7832V3.44376Z"
                fill="#AECDFB"
              />
              <path
                d="M45.5398 26.9149H30.7356C30.3554 26.9149 30.0467 26.6069 30.0467 26.226C30.0467 25.845 30.3554 25.5371 30.7356 25.5371H44.851V1.37778H13.9598V3.8006C13.9598 4.18087 13.6512 4.48949 13.2709 4.48949C12.8907 4.48949 12.582 4.18087 12.582 3.8006V0.688889C12.582 0.308622 12.8907 0 13.2709 0H45.5398C45.9208 0 46.2287 0.308622 46.2287 0.688889V26.226C46.2287 26.6063 45.9208 26.9149 45.5398 26.9149Z"
                fill="#0C0C0C"
              />
              <path
                d="M19.0714 26.9149H13.2709C12.8907 26.9149 12.582 26.607 12.582 26.226V22.7561C12.582 22.3751 12.8907 22.0672 13.2709 22.0672C13.6512 22.0672 13.9598 22.3751 13.9598 22.7561V25.5371H19.0714C19.4516 25.5371 19.7603 25.845 19.7603 26.226C19.7603 26.607 19.4516 26.9149 19.0714 26.9149Z"
                fill="#0C0C0C"
              />
              <path
                d="M61.3106 26.9149C60.9317 26.9149 60.6245 26.6097 60.6217 26.2308L60.5563 16.492L53.4938 9.07887H46.2274V25.5371H50.1437C50.5247 25.5371 50.8326 25.845 50.8326 26.226C50.8326 26.607 50.5247 26.9149 50.1437 26.9149H45.5385C45.1575 26.9149 44.8496 26.607 44.8496 26.226V8.38998C44.8496 8.00972 45.1575 7.7011 45.5385 7.7011H53.7893C53.9774 7.7011 54.1579 7.77825 54.2881 7.91465L61.7418 15.739C61.8631 15.8665 61.9306 16.0346 61.932 16.2096L61.9995 26.2212C62.0022 26.6021 61.6957 26.9121 61.3154 26.9149C61.314 26.9149 61.312 26.9149 61.3106 26.9149Z"
                fill="#0C0C0C"
              />
              <path
                d="M55.7254 16.9026H49.894C49.513 16.9026 49.2051 16.5946 49.2051 16.2137V8.38998C49.2051 8.00972 49.513 7.7011 49.894 7.7011C50.2749 7.7011 50.5829 8.00972 50.5829 8.38998V15.5255H55.7254C56.1064 15.5255 56.4143 15.8341 56.4143 16.2144C56.4143 16.5946 56.1057 16.9026 55.7254 16.9026Z"
                fill="#0C0C0C"
              />
              <path
                d="M22.7153 30.5598C20.3256 30.5598 18.3809 28.6158 18.3809 26.226C18.3809 23.8362 20.3249 21.8922 22.7153 21.8922C25.1051 21.8922 27.0491 23.8362 27.0491 26.226C27.0491 28.6158 25.1044 30.5598 22.7153 30.5598ZM22.7153 23.27C21.0854 23.27 19.7586 24.5961 19.7586 26.226C19.7586 27.8559 21.0847 29.182 22.7153 29.182C24.3459 29.182 25.6714 27.8559 25.6714 26.226C25.6714 24.5961 24.3453 23.27 22.7153 23.27Z"
                fill="#0C0C0C"
              />
              <path
                d="M53.7896 30.5598C51.3991 30.5598 49.4551 28.6158 49.4551 26.226C49.4551 23.8362 51.3991 21.8922 53.7896 21.8922C56.1793 21.8922 58.1234 23.8362 58.1234 26.226C58.1234 28.6158 56.1793 30.5598 53.7896 30.5598ZM53.7896 23.27C52.1597 23.27 50.8329 24.5961 50.8329 26.226C50.8329 27.8559 52.1597 29.182 53.7896 29.182C55.4195 29.182 56.7456 27.8559 56.7456 26.226C56.7456 24.5961 55.4195 23.27 53.7896 23.27Z"
                fill="#0C0C0C"
              />
              <path
                d="M29.4045 14.1456H0.688889C0.308622 14.1456 0 13.837 0 13.4568C0 13.0765 0.308622 12.7679 0.688889 12.7679H29.4045C29.7848 12.7679 30.0934 13.0765 30.0934 13.4568C30.0934 13.837 29.7848 14.1456 29.4045 14.1456Z"
                fill="#0C0C0C"
              />
              <path
                d="M29.405 8.31351H7.9799C7.59964 8.31351 7.29102 8.00489 7.29102 7.62462C7.29102 7.24435 7.59964 6.93573 7.9799 6.93573H29.4057C29.786 6.93573 30.0946 7.24435 30.0946 7.62462C30.0946 8.00489 29.7853 8.31351 29.405 8.31351Z"
                fill="#0C0C0C"
              />
              <path
                d="M29.405 19.9778H7.9799C7.59964 19.9778 7.29102 19.6699 7.29102 19.2889C7.29102 18.9079 7.59964 18.6 7.9799 18.6H29.4057C29.786 18.6 30.0946 18.9079 30.0946 19.2889C30.0946 19.6699 29.7853 19.9778 29.405 19.9778Z"
                fill="#0C0C0C"
              />
            </svg>
            <h1 className=" text-descriptionColor text-xl">Enjoy Free Car</h1>
          </div>
          <div className="md:flex grid place-items-center items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="46"
              viewBox="0 0 40 46"
              fill="none"
            >
              <path
                d="M20.0005 35.7168C25.9119 35.7168 30.7041 30.9246 30.7041 25.0131C30.7041 19.1017 25.9119 14.3095 20.0005 14.3095C14.089 14.3095 9.29688 19.1017 9.29688 25.0131C9.29688 30.9246 14.089 35.7168 20.0005 35.7168Z"
                fill="#AECDFB"
              />
              <path
                d="M19.9997 39.2811C16.6584 39.2811 13.4097 38.102 10.8519 35.9599C10.6403 35.7828 10.6122 35.4671 10.7893 35.2555C10.9664 35.0429 11.2816 35.0149 11.4942 35.193C13.8725 37.1835 16.893 38.2806 19.9997 38.2806C27.3095 38.2806 33.2566 32.3335 33.2566 25.0236C33.2566 17.7138 27.3095 11.7667 19.9997 11.7667C12.8569 11.7667 7.01536 17.4442 6.75222 24.5234H8.92486C9.201 24.5234 9.42512 24.747 9.42512 25.0236C9.42512 25.3003 9.201 25.5239 8.92486 25.5239H6.24245C5.96631 25.5239 5.74219 25.3003 5.74219 25.0236C5.74219 17.162 12.138 10.7661 19.9997 10.7661C27.8613 10.7661 34.2572 17.162 34.2572 25.0236C34.2572 32.8853 27.8613 39.2811 19.9997 39.2811Z"
                fill="#0C0C0C"
              />
              <path
                d="M20 45.0236C8.97221 45.0236 0 36.0514 0 25.0236C0 15.3866 6.78656 7.19728 16.1985 5.38983V3.98009H14.0239C13.7477 3.98009 13.5236 3.75597 13.5236 3.47983C13.5236 1.56082 15.0844 0 17.0034 0H22.9966C24.9156 0 26.4764 1.56082 26.4764 3.47983C26.4764 3.75597 26.2528 3.98009 25.9761 3.98009H23.801V5.38983C33.2139 7.19678 40 15.3851 40 25.0236C40 36.0514 31.0283 45.0236 20 45.0236ZM17.199 5.74902C17.1995 5.75402 17.2 5.75952 17.2005 5.76403C17.2225 6.02316 17.0455 6.25578 16.7893 6.29931C7.64051 7.85712 1.00053 15.7318 1.00053 25.0236C1.00053 35.5001 9.5235 44.0231 20 44.0231C30.4765 44.0231 38.9995 35.5001 38.9995 25.0236C38.9995 15.7298 32.3575 7.85512 23.2057 6.29881C22.9496 6.25528 22.7695 6.02266 22.7915 5.76353C22.793 5.74201 22.7965 5.7205 22.801 5.69999V3.47983C22.801 3.20368 23.0246 2.97956 23.3012 2.97956H25.4254C25.1932 1.85147 24.1927 1.00053 22.9966 1.00053H17.0034C15.8078 1.00053 14.8068 1.85147 14.5752 2.97956H16.6993C16.9754 2.97956 17.1995 3.20368 17.1995 3.47983V5.74902H17.199Z"
                fill="#0C0C0C"
              />
              <path
                d="M18.8812 30.9897H12.2738C12.0767 30.9897 11.8981 30.8742 11.8175 30.6941C11.7365 30.5145 11.769 30.3044 11.9001 30.1573L17.7006 23.6344C18.6876 22.5248 18.5876 20.8194 17.478 19.8324C16.3679 18.8459 14.663 18.9454 13.6755 20.055C13.4924 20.2611 13.1757 20.2801 12.9691 20.0965C12.7625 19.9129 12.744 19.5968 12.9276 19.3902C14.2808 17.8684 16.62 17.7313 18.1423 19.085C19.6641 20.4387 19.8012 22.7779 18.4475 24.2997L13.3878 29.9892H18.8812C19.1574 29.9892 19.3815 30.2128 19.3815 30.4895C19.3815 30.7661 19.1574 30.9897 18.8812 30.9897Z"
                fill="#0C0C0C"
              />
              <path
                d="M25.9337 30.9898C25.6571 30.9898 25.4335 30.7661 25.4335 30.4895V28.5H20.1567C19.9751 28.5 19.808 28.4019 19.7195 28.2433C19.6314 28.0847 19.6354 27.8911 19.731 27.7366L25.508 18.3881C25.6251 18.198 25.8542 18.108 26.0703 18.17C26.2854 18.2311 26.434 18.4277 26.434 18.6513V27.4994H28.1689C28.4456 27.4994 28.6692 27.723 28.6692 27.9997C28.6692 28.2763 28.4456 28.5 28.1689 28.5H26.434V30.49C26.434 30.7661 26.2104 30.9898 25.9337 30.9898ZM21.0537 27.4994H25.4335V20.4127L21.0537 27.4994Z"
                fill="#0C0C0C"
              />
              <path
                d="M31.5382 25.5239H31.0745C30.7978 25.5239 30.5742 25.3003 30.5742 25.0236C30.5742 24.747 30.7978 24.5234 31.0745 24.5234H31.5382C31.8149 24.5234 32.0385 24.747 32.0385 25.0236C32.0385 25.3003 31.8149 25.5239 31.5382 25.5239Z"
                fill="#0C0C0C"
              />
              <path
                d="M20.0003 14.4486C19.7241 14.4486 19.5 14.2245 19.5 13.9483V13.4846C19.5 13.2084 19.7241 12.9843 20.0003 12.9843C20.2764 12.9843 20.5005 13.2084 20.5005 13.4846V13.9483C20.5005 14.225 20.2764 14.4486 20.0003 14.4486Z"
                fill="#0C0C0C"
              />
              <path
                d="M20.0003 37.0625C19.7241 37.0625 19.5 36.8388 19.5 36.5622V36.0985C19.5 35.8218 19.7241 35.5982 20.0003 35.5982C20.2764 35.5982 20.5005 35.8218 20.5005 36.0985V36.5622C20.5005 36.8388 20.2764 37.0625 20.0003 37.0625Z"
                fill="#0C0C0C"
              />
            </svg>
            <h1 className=" text-descriptionColor text-xl">
              24/7 Service Support
            </h1>
          </div>
        </div>
        <div>
          {/* 50% off */}
          <div>
            <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900 bg-blue-500 rounded-xl mt-20">
              <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                  <h2 className="text-center text-6xl tracki font-bold text-white">
                    Up to 50% Off
                  </h2>
                  <div className="space-x-2 text-center py-2 lg:py-0 ">
                    <span>
                      Don’t Miss The 50% Discount if You register Today. use
                    </span>
                    <span className="font-bold text-lg text-red-300">
                      Friday
                    </span>
                  </div>
                  <Link to={'/register'} className="px-2 text-center   py-2 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400 text-white ml-20">
                  Register Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </div>

      <div>
        <div
        // data-aos="fade-up"
        // data-aos-easing="ease-out-cubic"
        // data-aos-duration="1000"
        // data-aos-offset="100"
        >
          <p className="text-center text-[#524FF5] text-2xl font-semibold uppercase tracking-[8px] mb-1 mt-20">
            We Trained You to Gain
          </p>
          <h1 className="text-center text-5xl font-bold mb-16">Our Trainers</h1>

          <div>
            <div className="grid md:grid-cols-3 space-x-4 ">
              <div className="bg-[#1B2129]">
                <div className="bg-[#D3D3D3] -mt-3">
                  <img
                    className=" mx-auto"
                    src={Trainer2}
                    alt="profile-picture"
                  />
                </div>

                <div className="p-6 text-white">
                  <div className="flex justify-between items-center">
                    <h4 className="mb-2 text-2xl font-semibold">Steve Smith</h4>
                    <span className="flex items-center text-xl  text-[#FFA722]">
                      <FaStar></FaStar>
                      <span className="text-white">/5</span>
                    </span>
                  </div>
                  <p className="border-[#49505A] border"></p>
                  <p className="mt-4 mb-1 text-xl font-semibold">
                    Specializations :
                  </p>
                  <p className=" text-xl font-normal text-[#858585]">
                    Crosscut Export, Nutrition & Rehab
                  </p>
                  <div className="flex justify-center text-xl gap-4 mt-4">
                    <FaInstagram></FaInstagram>
                    <FaFacebook></FaFacebook>
                    <FaTwitter></FaTwitter>
                  </div>
                </div>
              </div>

              <div className="bg-[#1B2129]">
                <div className="bg-[#D3D3D3]">
                  <img
                    className="mx-auto"
                    src={Trainer1}
                    alt="profile-picture"
                  />
                </div>

                <div className="p-6 text-white">
                  <div className="flex justify-between items-center">
                    <h4 className="mb-2 text-2xl font-semibold">
                      Madison Froning
                    </h4>
                    <span className="flex items-center text-xl  text-[#FFA722]">
                      <FaStar></FaStar>
                      <span className="text-white">/5</span>
                    </span>
                  </div>
                  <p className="border-[#49505A] border"></p>
                  <p className="mt-4 mb-1 text-xl font-semibold">
                    Specializations :
                  </p>
                  <p className=" text-xl font-normal text-[#858585]">
                    Fitness Fashion Export, Fiesta & Rehab
                  </p>
                  <div className="flex justify-center text-xl gap-4 mt-4">
                    <FaInstagram></FaInstagram>
                    <FaFacebook></FaFacebook>
                    <FaTwitter></FaTwitter>
                  </div>
                </div>
              </div>
              <div className="bg-[#1B2129]">
                <div className=" bg-[#D3D3D3]">
                  <img
                    className="mx-auto"
                    src={Trainer3}
                    alt="profile-picture"
                  />
                </div>

                <div className="p-6 text-white">
                  <div className="flex justify-between items-center">
                    <h4 className="mb-2 text-2xl font-semibold">
                      Jhon Willson
                    </h4>
                    <span className="flex items-center text-xl  text-[#FFA722]">
                      <FaStar></FaStar>
                      <span className="text-white">/5</span>
                    </span>
                  </div>
                  <p className="border-[#49505A] border"></p>
                  <p className="mt-4 mb-1 text-xl font-semibold">
                    Specializations :
                  </p>
                  <p className=" text-xl font-normal text-[#858585]">
                    Meditation Export, Mental & Yoga
                  </p>
                  <div className="flex justify-center text-xl gap-4 mt-4">
                    <FaInstagram></FaInstagram>
                    <FaFacebook></FaFacebook>
                    <FaTwitter></FaTwitter>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* discount */}

      <h1 className="text-center mt-20 font-bold text-4xl font-heading mb-5">
            Have Question?
          </h1>
          <div className="text-2xl">
            <Faq faqItems={faqItems} />
          </div>

      <div className="w-full mt-20 p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Your Are Also Available in your Mobile
        </h5>
        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          Download our app form Google Play & Mac App store, and enjoy with us.
        </p>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <svg
              className="mr-3 w-7 h-7"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="apple"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
              ></path>
            </svg>
            <div className="text-left">
              <div className="mb-1 text-xs">Download on the</div>
              <div className="-mt-1 font-sans text-sm font-semibold">
                Mac App Store
              </div>
            </div>
          </a>
          <a
            href="#"
            className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <svg
              className="mr-3 w-7 h-7"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google-play"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
              ></path>
            </svg>
            <div className="text-left">
              <div className="mb-1 text-xs">Get in on</div>
              <div className="-mt-1 font-sans text-sm font-semibold">
                Google Play
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
