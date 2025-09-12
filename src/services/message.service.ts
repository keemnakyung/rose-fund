import API_URL from "@/consts/apiUrl.const";
import { CommonDataResponse } from "@/dtos/common.dto";
import { MessageData } from "@/dtos/message.dto";
import { apiService } from "./apiService";
import { MessagePostProps } from "@/types/message.type";

export const messagePost = async (
  data: MessagePostProps,
): Promise<CommonDataResponse<MessageData>> => {
  const response = await apiService.postData<MessageData>(
    API_URL.MESSAGE + "/send",
    data,
    MessageData
  );

  return response;
};