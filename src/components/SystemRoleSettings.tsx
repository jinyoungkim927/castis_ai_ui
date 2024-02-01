import type { Accessor, Setter } from 'solid-js'
import { Show, createEffect, createSignal } from 'solid-js'
import SettingsSlider from './SettingsSlider'
import IconEnv from './icons/Env'
import IconX from './icons/X'

interface Props {
  canEdit: Accessor<boolean>
  systemRoleEditing: Accessor<boolean>
  setSystemRoleEditing: Setter<boolean>
  currentSystemRoleSettings: Accessor<string>
  setCurrentSystemRoleSettings: Setter<string>
  temperatureSetting: (value: number) => void
}

export default (props: Props) => {
  let systemInputRef: HTMLTextAreaElement
  const [temperature, setTemperature] = createSignal(0.6)

  const handleButtonClick = async() => {
    const response = await fetch('/system_prompt.txt') // Adjust the path if you place the file in a different directory
    const prePrompt = await response.text()
    const finalSystemRole = prePrompt + systemInputRef.value // Prepend the pre-prompt to the user's input
    props.setCurrentSystemRoleSettings(finalSystemRole)
    props.setSystemRoleEditing(false)
  }

  createEffect(() => {
    props.temperatureSetting(temperature())
  })

  return (
    <div class="my-4">
      <Show when={!props.systemRoleEditing()}>
        <Show when={props.currentSystemRoleSettings()}>
          <div>
            <div class="fi gap-1 op-50 dark:op-60">
              <Show when={props.canEdit()} fallback={<IconEnv />}>
                <span onClick={() => props.setCurrentSystemRoleSettings('')} class="sys-edit-btn p-1 rd-50%" > <IconX /> </span>
              </Show>
              <span>시스템 역할 ( Temp = {temperature()} ) : </span>
            </div>
            {/* <div class="mt-1">
              {props.currentSystemRoleSettings()}
            </div> */}
          </div>
        </Show>
        <Show when={!props.currentSystemRoleSettings() && props.canEdit()}>
          <span onClick={() => props.setSystemRoleEditing(!props.systemRoleEditing())} class="sys-edit-btn">
            <IconEnv />
            <span>시스템 역할 추가</span>
          </span>
        </Show>
      </Show>
      <Show when={props.systemRoleEditing() && props.canEdit()}>
        <div>
          <div class="fi gap-1 op-50 dark:op-60">
            <IconEnv />
            <span>System Role:</span>
          </div>
          <p class="my-2 leading-normal text-sm op-50 dark:op-60">조심스럽게 어시스턴트를 지도하고 어시스턴트의 행동을 설정하십시오.</p>
          <div>
            <textarea
              ref={systemInputRef!}
              placeholder="당신은 도움이되는 비서입니다. 가능한 한 간결하게 대답하십시오...."
              autocomplete="off"
              autofocus
              rows="3"
              gen-textarea
            />
          </div>
          <div class="w-full fi fb">
            <button onClick={handleButtonClick} gen-slate-btn>
              Set
            </button>
            <div class="w-full ml-2">
              <SettingsSlider
                settings={{
                  name: 'Temperature',
                  type: 'slider',
                  min: 0,
                  max: 2,
                  step: 0.01,
                }}
                editing={() => true}
                value={temperature}
                setValue={setTemperature}
              />
            </div>
          </div>
        </div>
      </Show>
    </div>
  )
}
