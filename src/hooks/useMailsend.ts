import { messagePost } from "@/services/message.service";
import { useMailSend } from "@/stores/mail.store";
import { MessageDataProps } from "@/types/message.type";
import formChangeHandler from "@/utils/formChangeHandler.util";
import { useState } from "react";

interface MailsendProps {
    contentTitle: string;
}

export default function useMailsend({ contentTitle }: MailsendProps) {
    const [mailsendForData, setMailsendForData] = useState(new MessageDataProps());
    const changeHandler = formChangeHandler(setMailsendForData);
    const { setIsLoading } = useMailSend();

    const submitHandler = async () => {
        if (!mailsendForData.userName.trim()) {
            alert("이름을 입력해주세요.");
            return;
        } else if (!mailsendForData.userPhone.trim()) {
            alert("연락처를 입력해주세요.");
            return;
        } else if (!mailsendForData.content.trim()) {
            alert("내용을 입력해주세요.");
            return;
        }

        try {
            setIsLoading(true);
            const data = {
                userName: mailsendForData.userName,
                userPhone: mailsendForData.userPhone,
                content: mailsendForData.content,
                contentTitle,
                date: new Date().toISOString(),
            }

            const props = {
                type: 1,
                option: 1004,
                to: "pill4323@naver.com",
                data,
            }

            const res = await messagePost(props);

            if (res.statusCode === 200) {
                alert("메일이 성공적으로 전송되었습니다.");
                setMailsendForData(new MessageDataProps());
            } else {
                alert("메일 전송에 실패하였습니다.");
            }
        } catch (error) {
            console.error(error);
            alert("메일 전송에 실패하였습니다.");
        } finally {
            setIsLoading(false);
        }
    }

    return { 
        mailsendForData,
        changeHandler,
        submitHandler,
    }   
}