<template>
  <Header />
  <div class="flex">
    <div
      class="flex items-center justify-between px-10 w-[788px] h-[600px] rounded-md drop-shadow-md bg-white relative relative left-[160px] mt-4 mb-10"
    >
      <div class="flex flex-col items-center relative w-[320px] h-[287px]">
        <b class="text-center text-[#191919] text-[20px]">Sign In</b>
        <p class="text-center text-[#494C52] text-[14px] mb-6">
          We are excited to have you
        </p>
        <button @click="signInWithGoogle()"
          class="flex items-center w-[320px] h-[48px] border-2 solid rounded-full border-gray-300 mb-7"
        >
          <div
            class="w-[48px] h-[48px] rounded-full flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="Rectangle_128"
                    data-name="Rectangle 128"
                    width="24"
                    height="24"
                    transform="translate(65 409.932)"
                    fill="rgba(230,230,230,0.6)"
                  />
                </clipPath>
              </defs>
              <g
                id="Mask_Group_287"
                data-name="Mask Group 287"
                transform="translate(-65 -409.932)"
                clip-path="url(#clip-path)"
              >
                <g
                  id="d56a83daff855ba754852b04aa0f3926"
                  transform="translate(65.24 410)"
                >
                  <path
                    id="Path_310"
                    data-name="Path 310"
                    d="M21.487,10.624a10.254,10.254,0,0,0-.253-2.446H10v4.441h6.594A5.848,5.848,0,0,1,14.148,16.5l-.022.149L17.678,19.4l.246.025a11.7,11.7,0,0,0,3.563-8.8"
                    transform="translate(1.966 1.608)"
                    fill="#4285f4"
                  />
                  <path
                    id="Path_311"
                    data-name="Path 311"
                    d="M11.756,21.577a11.405,11.405,0,0,0,7.924-2.9L15.9,15.754a7.082,7.082,0,0,1-4.148,1.2,7.2,7.2,0,0,1-6.807-4.972l-.14.012L1.115,14.848l-.048.134a11.957,11.957,0,0,0,10.689,6.595"
                    transform="translate(0.21 2.355)"
                    fill="#34a853"
                  />
                  <path
                    id="Path_312"
                    data-name="Path 312"
                    d="M5.159,13.259a7.367,7.367,0,0,1-.4-2.367,7.741,7.741,0,0,1,.386-2.367l-.007-.159L1.4,5.462l-.122.058a11.941,11.941,0,0,0,0,10.743l3.882-3"
                    transform="translate(0 1.074)"
                    fill="#fbbc05"
                  />
                  <path
                    id="Path_313"
                    data-name="Path 313"
                    d="M11.756,4.627a6.632,6.632,0,0,1,4.627,1.782l3.377-3.3a11.5,11.5,0,0,0-8-3.111A11.957,11.957,0,0,0,1.067,6.594l3.869,3a7.233,7.233,0,0,1,6.821-4.972"
                    transform="translate(0.21 0)"
                    fill="#eb4335"
                  />
                </g>
              </g>
            </svg>
          </div>
          <span
            class="text-[#494C52] text-[14px] font-semibold relative left-14"
          >
            Sign in with Google</span
          >
        </button>
        <button
          class="flex items-center w-[320px] h-[48px] border-2 solid rounded-full border-gray-300 mb-7"
        >
          <div
            class="w-[48px] h-[48px] rounded-full flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <defs>
                <clipPath id="clip-path-1">
                  <rect
                    id="Rectangle_128"
                    data-name="Rectangle 128"
                    width="24"
                    height="24"
                    transform="translate(65.299 482.279)"
                  />
                </clipPath>
              </defs>
              <g
                id="Mask_Group_288"
                data-name="Mask Group 288"
                transform="translate(-65.299 -482.279)"
                clip-path="url(#clip-path-1)"
              >
                <path
                  id="_617b60e42ed6a138e25f0d9521c1c8b0"
                  data-name="617b60e42ed6a138e25f0d9521c1c8b0"
                  d="M16.729,25.533V14.451h3.72l.557-4.319H16.729V7.375c0-1.25.347-2.1,2.14-2.1h2.287V1.409a30.65,30.65,0,0,0-3.332-.17c-3.3,0-5.555,2.013-5.555,5.709v3.185H8.54v4.319h3.729V25.533h4.46Z"
                  transform="translate(62.304 480.772)"
                  fill="#3c5a9a"
                />
              </g>
            </svg>
          </div>
          <span
            class="text-[#494C52] text-[14px] font-semibold relative left-12"
            >Sign in with Facebook</span
          >
        </button>
        <button
          class="flex items-center w-[320px] h-[48px] border-2 solid rounded-full border-gray-300 mb-7"
        >
          <div
            class="w-[48px] h-[48px] rounded-full flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <defs>
                <clipPath id="clip-path-2">
                  <rect
                    id="Rectangle_128"
                    data-name="Rectangle 128"
                    width="24"
                    height="24"
                    transform="translate(65 481.994)"
                  />
                </clipPath>
              </defs>
              <g
                id="Mask_Group_294"
                data-name="Mask Group 294"
                transform="translate(-65 -481.994)"
                clip-path="url(#clip-path-2)"
              >
                <path
                  id="_0aff1734a8dfd551b74086f94ea3343f"
                  data-name="0aff1734a8dfd551b74086f94ea3343f"
                  d="M18.478,13.051a5.3,5.3,0,0,0,3.22,4.855,13.131,13.131,0,0,1-1.66,3.413c-1,1.462-2.038,2.918-3.673,2.948-1.607.029-2.123-.953-3.96-.953s-2.41.922-3.931.982c-1.578.06-2.78-1.581-3.789-3.037C2.624,18.28,1.05,12.841,3.164,9.17A5.874,5.874,0,0,1,8.129,6.162c1.55-.03,3.013,1.043,3.96,1.043s2.724-1.289,4.593-1.1a5.6,5.6,0,0,1,4.388,2.38,5.427,5.427,0,0,0-2.593,4.566M15.458,4.134A5.286,5.286,0,0,0,16.706.3a5.378,5.378,0,0,0-3.535,1.819A5.022,5.022,0,0,0,11.9,5.833a4.45,4.45,0,0,0,3.56-1.7"
                  transform="translate(65.068 481.697)"
                />
              </g>
            </svg>
          </div>
          <span
            class="text-[#494C52] text-[14px] font-semibold relative left-12"
            >Sign in with Apple ID</span
          >
        </button>
      </div>
      <!-- divider -->
      <div class="h-[287px] border-l border-2 border-gray-100"></div>

      <div class="flex flex-col items-center relative w-[320px] h-[287px]">
        <svg
          id="Layer_2"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="60px"
        >
          <g id="Layer_1-2" data-name="Layer 1">
            <g>
              <path
                d="M156.25,20.17c-9.06,70.87-65.2,127.01-136.07,136.07C46.06,95.07,95.07,46.06,156.25,20.17Z"
                fill="#c8c9ca"
              />
              <path
                d="M157.54,201.78V492.35C65.03,453.79,0,362.49,0,256c35.38,0,69.1-7.18,99.75-20.17,20.81-8.82,40.24-20.3,57.79-34.05Z"
                fill="#c8c9ca"
              />
              <path
                d="M269.68,.36c-4.53-.23-9.09-.36-13.69-.36V512c4.6,0,9.15-.13,13.69-.36,135.04-7.11,242.32-118.84,242.32-255.63S404.72,7.47,269.68,.36Zm0,34.47c40.45,2.49,77.99,15.86,109.73,37.21l23.93,72.7-51.12,40.47-31.79-10.33-50.76-16.5V34.83Zm119.44,373.06l-9.84,32.13c-31.7,21.31-69.21,34.64-109.6,37.09v-122.95l82.2-26.72,33.11,30.87,15.03,14.03-10.9,35.55Zm19.2-46.5l-15.41-14.37-32.47-30.3v-120.57l51.14-40.49,57.8,40.52c5.34,19.03,8.2,39.09,8.2,59.8s-2.98,41.56-8.52,60.95l-60.74,44.45Z"
                fill="#c8c9ca"
              />
            </g>
          </g>
        </svg>
        <span class="text-[#494C52] text-[10px] mt-[90px]">
          By signing in you are agreeing to <br />
          <a class="text-blue-700 text-[10px]" href="#">Privacy Policy</a> &
          <a class="text-blue-700 text-[10px]" href="#">Terms of Service</a>
        </span>
      </div>
    </div>
    <div
      class="w-[380px] h-[600px] rounded-md drop-shadow-md bg-white mt-4 relative left-[190px]"
    ></div>
  </div>
  <Footer />
</template>

<script setup>
import {getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const signInWithGoogle  = () =>{
  const nuxtApp = useNuxtApp();
  // const auth = nuxtApp.$auth;
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
  .then((result) => {
    console.log(result);
    router.push('');
  }) 
  .catch((error) =>{
    console.error("Sign-in error:", error);
  }) 
}



</script>

<style lang="scss" scoped></style>