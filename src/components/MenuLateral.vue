<template>
    <div class="offcanvas offcavans-start offcanvas-custom" tabindex="-1" id="offcanvasMenu">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasMenuLabel">Menu Lateral</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <!-- Conteúdo do Offcanvas -->
            <div class="adicionar-usuario ">
                <i class="bi bi-person-circle"></i><span>Novo usuário</span>
            </div>
            <div class="adicionar-grupo">
                 <i class="bi bi-people-fill "></i> <span> Novo Grupo</span>
            </div>

            <input type="text" class="form-control" placeholder="Nome do usuário">
            <!-- Adicione mais conteúdo conforme necessário -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuLateral',
};
</script>

<style scoped>
.offcanvas-custom {
    position: absolute;
    width: 100%;
    max-width: 400px;
    top: 0;
    left: 0;
    border-radius: 0;
    z-index: 1045;
    background-color: white;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
}

.bi {
    font-size: 35px;
    color:#128c7e;
}
.adicionar-usuario, .adicionar-grupo  span {
  font-weight: 500;
 
}
</style>