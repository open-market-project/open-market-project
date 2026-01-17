document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const userTypeInput = document.getElementById("userType");
    const errorLabel = document.getElementById("errorMessage");
    const tabs = document.querySelectorAll(".login-tabs button");

    // 1. 탭 전환 로직
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // 모든 탭 비활성화
            tabs.forEach(t => {
                t.classList.remove("on");
                t.setAttribute("aria-selected", "false");
            });
            
            // 클릭한 탭 활성화
            tab.classList.add("on");
            tab.setAttribute("aria-selected", "true");
            
            // hidden input 값 변경 (BUYER / SELLER)
            userTypeInput.value = tab.dataset.type;
            
            // 탭 전환 시 에러 메시지 초기화
            errorLabel.classList.add("ir");
            errorLabel.innerText = "";
        });
    });

    // 2. 로그인 제출 로직
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const user_type = userTypeInput.value;

        if (!username || !password) {
            displayError("아이디와 비밀번호를 모두 입력해주세요.");
            return;
        }

        try {
            // 로그인 API 호출 (이전 소스 로직 유지)
            // const result = await loginAPI(username, password, user_type);
            console.log("로그인 시도:", { username, user_type });
            
        } catch (error) {
            displayError("아이디 또는 비밀번호가 일치하지 않습니다.");
        }
    });

    function displayError(message) {
        errorLabel.innerText = message;
        errorLabel.classList.remove("ir"); // ir 클래스 제거하여 노출
    }
});