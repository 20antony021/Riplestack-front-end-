// import Card from "components/card";
import React, { useState } from "react";
import {
  Input,
  Notification,
  Progress,
  TagInput,
  Tooltip,
  Whisper,
} from "rsuite";
import { HiX } from "react-icons/hi";
import { toast } from "react-toastify";

import facebookIcon from "../../../assets/img/marks/facebook.png";
import twitterIcon from "../../../assets/img/marks/twitter.png";
import instagramIcon from "../../../assets/img/marks/instagram.png";
import tiktokIcon from "../../../assets/img/marks/tiktok.png";
import PlatformButton from "./components/PlatformButton";
import avatar from "assets/img/avatars/avatar4.png";
import preview from "assets/img/preview/preview.png";

const NewPost = () => {
  const platforms = [
    { name: "all", label: "All Platforms", avatar: null },
    { name: "facebook", label: "Facebook", avatar: facebookIcon },
    { name: "instagram", label: "Instagram", avatar: instagramIcon },
    { name: "tiktok", label: "TikTok", avatar: tiktokIcon },
    { name: "twitter", label: "X", avatar: twitterIcon },
  ];

  const [tags, setTags] = useState([]);
  const [previewFiles, setPreviewFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const [account, setAccount] = useState(platforms[0].name);

  const handleTags = (ts) => {
    setTags(ts);
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileReader = new FileReader();
      if (
        previewFiles.some(
          (prev) => prev.title === file.name && file.type.startsWith(prev.type)
        )
      ) {
        toast.warning("Your file is already attached!");
        event.target.value = "";
        return false;
      }
      // Determine the type of file (image or video)
      if (["image/", "video/"].some((type) => file.type.startsWith(type))) {
        //set loading state
        setLoading(true);
        // set preview panel
        fileReader.onload = () => {
          setPreviewFiles(
            previewFiles.concat({
              type: file.type.startsWith("image/") ? "image" : "video",
              title: file.name,
              data: fileReader.result,
            })
          );
          setLoading(false);
          setProgress(0);
        };

        fileReader.onprogress = (event) => {
          if (event.lengthComputable) {
            const percentage = Math.round((event.loaded / event.total) * 100);
            setProgress(percentage);
          }
        };

        fileReader.readAsDataURL(file); // Read the file as a data URL
      } else {
        setPreviewFiles(previewFiles.concat({ type: null, title: file.name }));
      }
      event.target.value = "";
    }
  };

  const handleRemovePreview = (preview_id) => {
    setPreviewFiles(previewFiles.filter((_, i) => i !== preview_id));
  };

  const renderPreview = () => {
    if (previewFiles.length > 0 && previewFiles[0].type === "image") {
      return <img className="w-full" src={previewFiles[0].data} />;
    } else if (previewFiles.length > 0 && previewFiles[0].type === "video") {
      return (
        <video
          muted
          playsInline
          className="w-full"
          src={previewFiles[0].data}
        />
      );
    } else if (previewFiles.length > 0) {
      return (
        <div className="flex h-full w-full items-center justify-center">
          Unsupported file
        </div>
      );
    } else {
      return (
        <div className="flex h-full w-full items-center justify-center">
          <img className="h-[100px] w-[100px]" src={preview} alt="preview" />
        </div>
      );
    }
  };

  return (
    <div className="mt-3 h-full w-full px-2">
      <div className="flex h-full w-full flex-col 3xl:flex-row">
        <div className="mr-4 w-full rounded-xl bg-gradient-to-b from-[#FFFFFF] to-[#FDF7FF] px-5 py-3 3xl:w-[65%]">
          <div className="py-3 text-2xl font-bold">Publish to</div>
          <div className="mt-3 flex w-full">
            {platforms.map((item, idx) => (
              <PlatformButton activeAccount={account} onActiveAccount={(v) => setAccount(v)} key={`platform_btn_${idx}`} {...item} />
            ))}
          </div>
          <div className="mt-3 w-full rounded-lg border border-[#EBEBEB] p-3">
            <Input
              className="!border-0"
              style={{ background: "transparent" }}
              as={`textarea`}
              rows={6}
              placeholder="Write your content..."
              onChange={(value) => setContent(value)}
            />
            <TagInput
              onChange={handleTags}
              className="mt-3 !bg-[#F0EEF7]"
              block
              placeholder="Add tags..."
            />
          </div>
          <div className="mt-5 w-full">
            <div className="py-3 text-lg font-bold">Add Attachment</div>
            <div className="relative py-2">
              {/* <div className="flex flex-wrap w-[calc(100%-110px)] overflow-hidden h-6 items-center">
                { previewFiles.map((prev, index) => (<div key={`prev_filelist_${index}`} className="bg-[#F0EEF7] m-1 rounded-md px-2 text-[#3B3A44]">{prev.title}</div>)) }
              </div> */}
              <div className="flex items-center">
                {[...Array(3)].map((_, idx) => (
                  <div
                    key={`file_upload_buttons_${idx}`}
                    className="relative transition duration-150 hover:scale-110 mr-2 h-7 w-7 rounded-lg border border-gray-600"
                  >
                    <button className="flex h-full w-full items-center justify-center rounded-lg">
                      {idx === 0 && (
                        <span className="text-[#6D6B85]">
                          <svg
                            className="h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            fill="currentColor"
                          >
                            <path d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z" />
                          </svg>
                        </span>
                      )}
                      {idx === 1 && (
                        <span className="text-[#6D6B85]">
                          <svg
                            className="h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                          >
                            <path d="M448 80c8.8 0 16 7.2 16 16l0 319.8-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3L48 96c0-8.8 7.2-16 16-16l384 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                          </svg>
                        </span>
                      )}
                      {idx === 2 && (
                        <span className="text-[#6D6B85]">
                          <svg
                            className="h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            fill="currentColor"
                          >
                            <path d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
                          </svg>
                        </span>
                      )}
                    </button>
                    <input
                      accept={
                        idx === 0 ? "*.*" : idx === 1 ? "image/*" : "video/*"
                      }
                      type="file"
                      className="z-90 absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
                      onChange={handleFileChange}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex min-h-[120px] w-full flex-wrap items-center gap-3 py-3">
              {!previewFiles.length ? (
                <Notification
                  className="w-full !bg-gradient-to-b !from-[#FFFFFF] !to-[#FDF7FF]"
                  type="info"
                  header={`There is no attached file`}
                  closable
                />
              ) : (
                previewFiles.map((preview, preview_id) => (
                  <Whisper
                    followCursor
                    speaker={<Tooltip>{preview.title}</Tooltip>}
                    key={`preview_${preview_id}`}
                  >
                    <div className="relative mr-3 flex h-[70px] w-[70px] items-center bg-gray-100 shadow-lg">
                      <div className="h-[70px] w-[70px] overflow-hidden rounded-lg">
                        {preview.type === "image" && (
                          <img height={70} src={preview.data} alt="preview" />
                        )}
                        {preview.type === "video" && (
                          <video
                            height={70}
                            src={preview.data}
                            muted
                            playsInline
                          />
                        )}
                        {preview.type === null && (
                          <div className="h-[70px] w-[70px] p-5">
                            <svg
                              className="h-full w-full"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 384 512"
                              fill="currentColor"
                            >
                              <path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => handleRemovePreview(preview_id)}
                        className="absolute right-[-7px] top-[-7px] flex h-[15px] w-[15px] items-center justify-center rounded-full border border-[#DADADA] bg-[#F0EEF7]"
                      >
                        <HiX />
                      </button>
                    </div>
                  </Whisper>
                ))
              )}
            </div>
          </div>
        </div>
        <div className="w-full rounded-xl bg-gradient-to-b from-[#FFFFFF] to-[#FDF7FF] 3xl:w-[35%] mt-5 3xl:mt-0">
          <div className="h-full w-full px-5 pt-5 pb-[32px]">
            <div className="py-3 text-2xl font-bold">Post Preview</div>
            <div className="bg-[#fff] rounded-lg border border-gray-200 p-5">
              <div className="flex w-full items-center">
                <img
                  className="mr-3 h-9 w-9 rounded-full"
                  alt="preview"
                  src={avatar}
                />
                <div className="flex flex-col">
                  <div className="text-sm font-bold">Emily</div>
                  <div className="text-xs text-gray-400">Sponsored</div>
                </div>
              </div>
              <div className="flex w-full items-center justify-center mt-5">
                <div className="flex flex-col justify-center items-center w-full max-h-[600px] min-h-[400px] bg-gray-200 overflow-hidden rounded-lg">
                  {renderPreview()}
                </div>
              </div>
              <div className="text-sm mt-5 w-full">{!content || !content.length ? "Your content here..." : content}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full mt-5">
        <button className="flex items-center transition ease duration-150 hover:bg-[#d0a0f7] hover:scale-110 py-2 px-4 mr-3 rounded-full text-[#C275FF] hover:text-[#45007C] border-2 border-[#C275FF]">
            <span className="mr-2">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z"/></svg>
            </span>
            <span className="text-md font-bold">Schedule Post</span>
        </button>
        <button className="flex items-center transition ease duration-150 py-2 px-4 hover:scale-110 bg-gradient-to-b from-[#7F03E2] to-[#A13BF2] rounded-full text-[#FFFFFF] hover:bg-gradient-to-t border-2 border-[#C275FF]">
            <span className="text-md font-bold">Post Now</span>
        </button>
      </div>
      {loading && (
        <div className="fixed absolute left-0 top-0 z-[999] w-full">
          <Progress.Line
            percent={progress}
            status={progress === 100 ? "success" : null}
            strokeWidth={4}
            showInfo={false}
          />
        </div>
      )}
    </div>
  );
};

export default NewPost;
