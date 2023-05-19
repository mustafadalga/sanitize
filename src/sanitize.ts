import type { Directive } from "vue";
import dompurity from "dompurify"

const sanitize: Directive = {
    mounted(element: HTMLInputElement): void {
        function handleInput(event: Event): void {
            const target: HTMLInputElement = event.target as HTMLInputElement;
            target.value = dompurity.sanitize(target.value)
        }

        element.addEventListener('input', handleInput);
    },
}

export {
    sanitize
}