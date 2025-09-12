export default function formChangeHandler<T extends object>(
    setState: React.Dispatch<React.SetStateAction<T>>,
    convertOption: boolean = false
  ) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value, type } = e.target;
          let isVal: string | number | boolean = value;
          
      if (type === "number") {
        isVal = Number(value);
      } else if (type === "checkbox") {
              isVal = (e.target as HTMLInputElement).checked;
          } else if (type === "tel") {
        // Format Korean phone numbers with hyphens automatically
        const formatKoreanPhoneNumber = (value: string) => {
          const onlyNums = value.replace(/[^0-9]/g, "");
          if (onlyNums.startsWith("02")) {
            // 서울: 02-123-4567
            if (onlyNums.length < 3) return onlyNums;
            if (onlyNums.length < 6) return onlyNums.replace(/(02)([0-9]+)/, "$1-$2");
            if (onlyNums.length < 10) return onlyNums.replace(/(02)([0-9]{3})([0-9]+)/, "$1-$2-$3");
            return onlyNums.replace(/(02)([0-9]{3})([0-9]{4})/, "$1-$2-$3");
          } else if (onlyNums.length === 8) {
            // 1588-1234, 1522-1234 등
            return onlyNums.replace(/([0-9]{4})([0-9]{4})/, "$1-$2");
          } else if (onlyNums.length <= 10) {
            // 지역번호(3자리)-3자리-4자리
            if (onlyNums.length < 4) return onlyNums;
            if (onlyNums.length < 7) return onlyNums.replace(/([0-9]{3})([0-9]+)/, "$1-$2");
            return onlyNums.replace(/([0-9]{3})([0-9]{3})([0-9]+)/, "$1-$2-$3");
          } else {
            // 휴대폰 등 010-1234-5678
            return onlyNums.replace(/([0-9]{3})([0-9]{4})([0-9]+)/, "$1-$2-$3");
          }
        };
        isVal = formatKoreanPhoneNumber(value);
      } else if (convertOption && name === "option") {
              isVal = Number(value)
          } else {
              isVal = value;
          }
          
      setState((prev) => ({
        ...prev,
        [name]: isVal,
      }));
    };
  }