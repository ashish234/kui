/*
 * Copyright 2019 IBM Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Registrar } from '@kui-shell/core'
import { commandPrefix, defaultFlags, doGet, doCreate, doDelete, doRun, doDescribe } from '@kui-shell/plugin-kubectl'

const command = 'oc'

export default (registrar: Registrar) => {
  registrar.listen(`/${commandPrefix}/${command}/get`, doGet(command), defaultFlags)
  registrar.listen(`/${commandPrefix}/${command}/run`, doRun(command), defaultFlags)
  registrar.listen(`/${commandPrefix}/${command}/delete`, doDelete(command), defaultFlags)
  registrar.listen(`/${commandPrefix}/${command}/describe`, doDescribe(command), defaultFlags)
  registrar.listen(`/${commandPrefix}/${command}/apply`, doCreate('apply', command), defaultFlags)
  registrar.listen(`/${commandPrefix}/${command}/create`, doCreate('create', command), defaultFlags)
}
