# jquery-validate
基于jquery实现的表单验证插件
可自定义校验规则
例如：模板定义
<input type="text" class="form-control" name="username"
       data-bv-required="true" 
       data-bv-required-message="The username is required and cannot be empty"
       data-bv-regex="^[a-zA-Z0-9]+$"
       data-bv-regex-message="The username can only consist of alphabetical,number"/>
需定义相对应的规则引擎
