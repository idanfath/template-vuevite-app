//this is a vue plugin custom made by me
// name: "myFunct"
// version: "1.0.0"

import { computed } from "vue";

export default {
    install: (app) => {
        app.mixin({
            data() {
                const main = "http://localhost:8000";
                return {
                    mf: {
                        app: {
                            title: "My App",
                            version: "1.0.0",
                            urls: {

                            }
                        },
                        backend: {
                            main: main,
                            api: main + "/api",
                            public: main + "/storage",
                        },
                    },
                }
            },
            methods: {
                mf_test() {
                    console.log("myFunct plugin is working")
                }
            },
            created() {
                console.log()
            },
        });
    }
}
