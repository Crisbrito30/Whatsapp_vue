<template>
    <div class="offcanvas offcavans-start offcanvas-custom " tabindex="-1" id="offcanvasMenu">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasMenuLabel">Menu Lateral</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <!--  expandir o Conteúdo do adicionar usuairo -->
            <div class="accordion" id="accordionUser">
                <div class="accordin-item p-2">
                    <div class="adicionar-usuario " type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <i class="bi bi-person-circle"></i><span> Novo usuário</span>
                    </div>
                    <div class="accordion-body ">
                        <AdicionarUsuario id="collapseOne" class="accordion-collapse collapse p-2"
                            data-bs-parent="#accordionUser" />
                    </div>
                </div>
            </div>
            <!--  expandir o Conteúdo do adicionar Grupo -->
            <div class="accordion " id="accordionGrupo">
                <div class="accodion-item p-2">
                    <div class="adicionar-grupo " type="buuton" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseOne">
                        <i class="bi bi-people-fill "></i> <span> Novo Grupo</span>
                    </div>
                    <div class="accordion-body ">
                        <AdicionarGrupo id="collapseTwo" class="accordion-collapse collapse p-2"
                            data-bs-parent="#accordionGrupo" />
                    </div>
                </div>
            </div>
             <!-- Adicione mais conteúdo conforme necessário -->
        </div>
       
    </div>

</template>

<script>
import AdicionarUsuario from './AdicionarUsuario.vue';
import AdicionarGrupo from './AdicionarGrupo.vue';

export default {
    name: 'MenuLateral',
    components: {
        AdicionarUsuario,
        AdicionarGrupo
    }
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
    width: 45px;
    height: 45px;
    border-radius: 50%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    text-align: center;
    /* Centraliza o conteúdo horizontalmente */
    line-height: 45px;
    /* Alinha o conteúdo verticalmente */
    color: #128c7e;
    font-size: 30px;
    margin-right: 10px; 
}
.accordion-body {
    border-radius: 11px;
    margin:nome;
    padding: 1px;
    background-color: #f3f5f5;
    
  
}
.adicionar-usuario,
.adicionar-grupo {
    display: flex;
    align-items: center;
    font-weight: 500;
    gap: 10px;
    
}
</style>